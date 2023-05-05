import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';
import ZZANGU_LIST from '../datas/zzanguList';
import { Zzangu } from '../datas/zzanguList';

interface Cards extends Zzangu {
  answer: number;
  flipped: boolean;
  matched: boolean;
}

const EASY_MODE = 3;
const NORMAL_MODE = 7;
const HARD_MODE = 9;

const Game = () => {
  // 게임 모드(난이도), 점수
  const [mode, setMode] = useState(EASY_MODE);
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  // 선택한 난이도에 따라 카드 배치
  const changeMode = (MODE: string) => {
    switch (MODE) {
      case 'EASY':
        setMode(EASY_MODE);
        setCardList(
          shuffleCards(ZZANGU_LIST.slice(0, EASY_MODE)).map((card: Zzangu, index: number) => {
            return {
              id: index,
              answer: card.id,
              src: card.src,
              alt: card.alt,
              flipped: false,
              matched: false,
            };
          }),
        );
        generateCards();
        break;
      case 'NORMAL':
        setMode(NORMAL_MODE);
        setCardList(
          shuffleCards(ZZANGU_LIST.slice(0, NORMAL_MODE)).map((card: Zzangu, index: number) => {
            return {
              id: index,
              answer: card.id,
              src: card.src,
              alt: card.alt,
              flipped: false,
              matched: false,
            };
          }),
        );
        generateCards();
        break;
      case 'HARD':
        setMode(HARD_MODE);
        setCardList(
          shuffleCards(ZZANGU_LIST.slice(0, HARD_MODE)).map((card: Zzangu, index: number) => {
            return {
              id: index,
              answer: card.id,
              src: card.src,
              alt: card.alt,
              flipped: false,
              matched: false,
            };
          }),
        );
        generateCards();
        break;
      default:
        break;
    }
  };

  // 카드 섞기
  const shuffleCards = (card: Zzangu[]) => {
    const duplicatedCards = [...card, ...card];

    // let currentIndex = duplicatedCards.length,
    //   temporaryValue,
    //   randomIndex;

    // while (0 !== currentIndex) {
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;
    //   temporaryValue = card[currentIndex];

    //   if (temporaryValue) {
    //     duplicatedCards[currentIndex] = duplicatedCards[randomIndex];
    //     duplicatedCards[randomIndex] = temporaryValue;
    //   }
    // }

    return duplicatedCards;
  };

  // 섞은 카드 리스트
  const [cardList, setCardList] = useState<Cards[]>(
    shuffleCards(ZZANGU_LIST.slice(0, EASY_MODE)).map((card: Zzangu, index: number) => {
      return {
        id: index,
        answer: card.id,
        src: card.src,
        alt: card.alt,
        flipped: false,
        matched: false,
      };
    }),
  );

  // 뒤집은 카드 리스트
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    // 두 개의 카드가 뒤집혔을 때
    if (flippedCards.length === 2) {
      // 두 개의 카드가 뒤집힌 후에 두 번째 카드를 찾음
      setTimeout(() => {
        const card1 = cardList[flippedCards[0]];
        const card2 = cardList[flippedCards[1]];

        // 두 번째 카드가 매칭된 경우
        if (card2 && isMatchedCard(card1, card2)) {
          handleMatchedCard(card1, card2);
        } else {
          // 두 번째 카드가 매칭되지 않은 경우
          const newCardList = cardList.map((card) => {
            const flippedCard = { ...card };
            if (flippedCard.id === flippedCards[0] || flippedCard.id === flippedCards[1]) {
              flippedCard.flipped = false;
            }
            return flippedCard;
          });
          setCardList(newCardList);
        }

        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  // 카드 뒤집기
  const flipCard = (id: number) => {
    setFlippedCards([...flippedCards, id]);

    const newCardList = cardList.map((card) => {
      const showCard = { ...card };
      if (showCard.id === id && !showCard.flipped && !showCard.matched) {
        showCard.flipped = true;
      }
      return showCard;
    });

    setCardList(newCardList);
  };

  // 카드 매칭되었는지 확인
  const isMatchedCard = (first: Cards, second: Cards) => {
    if (first) {
      return first.answer === second.answer;
    } else return null;
  };

  // 카드 매칭 시
  const handleMatchedCard = (first: Cards, second: Cards) => {
    const newCardList = cardList.map((card) => {
      const matchedCard = { ...card };
      if (isMatchedCard(first, matchedCard) || isMatchedCard(second, matchedCard)) {
        matchedCard.matched = true;
      }
      return matchedCard;
    });
    setCardList(newCardList);
    setScore((prev) => prev + 1);
    checkGameOver();
  };

  // 카드 클릭 시
  const handleClick = (id: number) => {
    // 2개까지만 클릭 가능
    if (flippedCards.length === 2) {
      return;
    }
    flipCard(id);
  };

  // 카드 배치하기
  const generateCards = () => {
    return cardList.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          src={card.src}
          alt={card.alt}
          isFlipped={card.flipped}
          handleClick={() => handleClick(card.id)}
        />
      );
    });
  };

  useEffect(() => {
    if (isOver) {
      resetGame();
      return;
    }
  }, [isOver]);

  const checkGameOver = () => {
    score === mode - 1 ? setIsOver(true) : setIsOver(false);
  };

  const resetGame = () => {
    setScore(0);
    changeMode('EASY');
  };

  return (
    <GameWrapper>
      <Header mode={mode} score={score} />
      <StMode>
        <button type='button' onClick={() => changeMode('EASY')}>
          EASY
        </button>
        <button type='button' onClick={() => changeMode('NORMAL')}>
          NORMAL
        </button>
        <button type='button' onClick={() => changeMode('HARD')}>
          HARD
        </button>
      </StMode>
      <StCards>{generateCards()}</StCards>
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

  & > button {
    padding: 1rem 2rem;
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Medium_16};

    color: ${({ theme }) => theme.colors.Zzangu_PinkBorder};
    background: ${({ theme }) => theme.colors.Zzangu_LightPink};
    border: 0.2rem solid ${({ theme }) => theme.colors.Zzangu_PinkBorder};
    border-radius: 1.5rem;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
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
`;

const StCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
