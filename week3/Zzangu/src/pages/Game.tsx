import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Button } from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { EASY_MODE, HARD_MODE, NORMAL_MODE } from '../datas/mode';
import ZZANGU_LIST, { Zzangu } from '../datas/zzanguList';
import { ModeState, ScoreState } from '../recoil/atom';

interface CardData extends Zzangu {
  answer: number;
  flipped: boolean;
  matched: boolean;
}

// 출제할 카드 섞기
const shuffleCards = (cards: Zzangu[]): Zzangu[] => {
  const duplicatedCards = [...cards, ...cards];
  duplicatedCards.sort(() => Math.random() - 0.5);
  return duplicatedCards;
};

// 모드별 카드 생성
const createCards = (cards: Zzangu[], mode: number): CardData[] => {
  cards.sort(() => Math.random() - 0.5);
  return shuffleCards(cards.slice(0, mode)).map((card, index) => ({
    id: index,
    answer: card.id,
    src: card.src,
    alt: card.alt,
    flipped: false,
    matched: false,
  }));
};

const Game = () => {
  const [mode, setMode] = useRecoilState(ModeState);
  const [score, setScore] = useRecoilState(ScoreState);
  const [isOver, setIsOver] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cardList, setCardList] = useState<CardData[]>(createCards(ZZANGU_LIST, EASY_MODE));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // 모드 변경
  const changeMode = (mode: number) => {
    setScore(0);
    setMode(mode);
    setCardList(createCards(ZZANGU_LIST, mode));
    displayCards();
  };

  useEffect(() => {
    // 두 개의 카드가 뒤집혔을 때
    if (flippedCards.length === 2) {
      const card1 = cardList[flippedCards[0]];
      const card2 = cardList[flippedCards[1]];

      setTimeout(() => {
        // 매칭 성공
        if (card1.answer === card2.answer) {
          const newCardList = cardList.map((card) => {
            if (card.id === card1.id || card.id === card2.id) {
              return { ...card, matched: true };
            }
            return card;
          });
          setCardList(newCardList);
          setScore((prev) => prev + 1);
          setIsOver(score === mode - 1);
        } else {
          // 매칭 실패 시 다시 뒤집기
          const newCardList = cardList.map((card) => {
            if (card.id === card1.id || card.id === card2.id) return { ...card, flipped: false };
            return card;
          });
          setCardList(newCardList);
        }
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (isOver) {
      setIsModalOpen((prev) => !prev);
    }
  }, [isOver]);

  // 카드 뒤집기
  const handleFlip = (id: number) => {
    // 2개까지만 뒤집기 가능
    if (flippedCards.length === 2) {
      return;
    }

    const newCardList = cardList.map((card) => {
      if (card.id === id && !card.flipped && !card.matched) {
        return { ...card, flipped: true };
      }
      return card;
    });

    setCardList(newCardList);
    setFlippedCards([...flippedCards, id]);
  };

  // 카드 배치하기
  const displayCards = () => {
    return cardList.map(({ id, src, alt, flipped, matched }: CardData) => {
      return (
        <Card
          key={id}
          id={id}
          src={src}
          alt={alt}
          isFlipped={flipped}
          isMatched={matched}
          handleFlip={() => handleFlip(id)}
        />
      );
    });
  };

  const handleReset = () => {
    setScore(0);
    changeMode(mode);
    setIsOver(false);
  };

  return (
    <GameWrapper>
      <Header />
      <StMode>
        <Button onClick={() => changeMode(EASY_MODE)}>EASY</Button>
        <Button onClick={() => changeMode(NORMAL_MODE)}>NORMAL</Button>
        <Button onClick={() => changeMode(HARD_MODE)}>HARD</Button>
        <Button onClick={handleReset} isReset>
          RESET
        </Button>
      </StMode>
      <StCards>{displayCards()}</StCards>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen((prev) => !prev);
            handleReset();
          }}
        ></Modal>
      )}
    </GameWrapper>
  );
};

export default Game;

const GameWrapper = styled.section`
  position: absolute;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.Zzangu_SkyBlue};
`;

const StMode = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 7rem;
`;

const StCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
