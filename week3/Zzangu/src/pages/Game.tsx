import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';
import ZZANGU_LIST from '../datas/zzanguList';
import { Zzangu } from '../datas/zzanguList';
import Modal from '../components/Modal';

interface CardData extends Zzangu {
  answer: number;
  flipped: boolean;
  matched: boolean;
}

const EASY_MODE = 2;
const NORMAL_MODE = 7;
const HARD_MODE = 9;

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
  const [mode, setMode] = useState(EASY_MODE);
  const [score, setScore] = useState(0);
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
      <Header mode={mode} score={score} />
      <StMode>
        <button className='modeBtn' type='button' onClick={() => changeMode(EASY_MODE)}>
          EASY
        </button>
        <button className='modeBtn' type='button' onClick={() => changeMode(NORMAL_MODE)}>
          NORMAL
        </button>
        <button className='modeBtn' type='button' onClick={() => changeMode(HARD_MODE)}>
          HARD
        </button>
        <button className='resetBtn' type='button' onClick={handleReset}>
          RESET
        </button>
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
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.Zzangu_SkyBlue};
`;

const StMode = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 7rem;

  & > .modeBtn {
    padding: 1rem 2rem;
    ${({ theme }) => theme.fonts.ZZangu_Button2};

    color: ${({ theme }) => theme.colors.Zzangu_PinkBorder};
    background: ${({ theme }) => theme.colors.Zzangu_LightPink};
    border: 0.2rem solid ${({ theme }) => theme.colors.Zzangu_PinkBorder};
    border-radius: 1.5rem;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: ${({ theme }) => theme.colors.Zzangu_DarkPink};
      border-radius: inherit;
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder};

      transform: translate3d(0, 0.75rem, -1rem);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
      background: ${({ theme }) => theme.colors.Zzangu_Pink};
      transform: translate(0, 0.25em);

      &::before {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder},
          0 0.5rem 0 0 ${({ theme }) => theme.colors.Zzangu_PinkShadow};
        transform: translate3d(0, 0.5rem, -1rem);
      }
    }

    &:active {
      background: ${({ theme }) => theme.colors.Zzangu_Pink};
      transform: translate(0rem, 0.75rem);

      &::before {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder},
          0 0 ${({ theme }) => theme.colors.Zzangu_PinkShadow};
        transform: translate3d(0, 0, -1em);
      }
    }
  }

  & > .resetBtn {
    position: absolute;
    right: 11%;
    overflow: hidden;
    z-index: 10;

    padding: 1rem 4rem;

    color: ${({ theme }) => theme.colors.Zzangu_YellowBorder};
    background: ${({ theme }) => theme.colors.Zzangu_Yellow};
    ${({ theme }) => theme.fonts.ZZangu_Button1};
    border: 0.3rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
    border-radius: 5rem;

    transition: all 0.3s ease-in-out;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      color: ${({ theme }) => theme.colors.Zzangu_White};
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -10%;
      z-index: -12;
      opacity: 1;

      width: 0%;
      height: 100%;

      background: ${({ theme }) => theme.colors.Zzangu_YellowBorder};

      transform: skewX(-20deg);
      transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
      box-shadow: 0.2rem 0rem 1.4rem rgba(0, 0, 0, 0.6);
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -10%;
      z-index: -15;
      opacity: 0;

      width: 0%;
      height: 100%;

      background: ${({ theme }) => theme.colors.Zzangu_White};

      transform: skewX(-20deg);
      transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
      box-shadow: 0.2rem, 0rem 1.4rem rgba(0, 0, 0, 0.6);
    }
    &:hover::before {
      opacity: 1;

      width: 116%;
    }
    &:hover::after {
      opacity: 1;

      width: 120%;
    }
  }
`;

const StCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
