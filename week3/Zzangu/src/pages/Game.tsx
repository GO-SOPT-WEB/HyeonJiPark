import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';
import ZZANGU_LIST from '../datas/zzanguList';
import { Zzangu } from '../datas/zzanguList';
import Modal from '../components/Modal';

interface Cards extends Zzangu {
  answer: number;
  flipped: boolean;
  matched: boolean;
}
export const EASY_MODE = 5;
export const NORMAL_MODE = 7;
export const HARD_MODE = 9;

const Game = () => {
  const [mode, setMode] = useState(EASY_MODE);
  const [score, setScore] = useState(0);
  const [questionList, setQuestionList] = useState(ZZANGU_LIST);
  const [isOver, setIsOver] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 카드 섞기
  const shuffleCards = (card: Zzangu[]) => {
    const duplicatedCards = [...card, ...card];
    duplicatedCards.sort(() => Math.random() - 0.5);
    return duplicatedCards;
  };

  useEffect(() => {
    setQuestionList((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCardList(
      shuffleCards(questionList.slice(0, EASY_MODE)).map((card: Zzangu, index: number) => {
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
  }, [mode]);

  // 섞은 카드 리스트
  const [cardList, setCardList] = useState<Cards[]>(
    shuffleCards(questionList.slice(0, EASY_MODE)).map((card: Zzangu, index: number) => {
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

  // 선택한 난이도에 따라 카드 배치
  const changeMode = (MODE: number) => {
    setScore(0);
    setCardList(
      shuffleCards(questionList.slice(0, MODE)).map((card: Zzangu, index: number) => {
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
  };

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
    return first.answer === second.answer;
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
          isMatched={card.matched}
          handleClick={() => handleClick(card.id)}
        />
      );
    });
  };

  useEffect(() => {
    if (isOver) {
      setIsModalOpen((prev) => !prev);
      resetGame();
      return;
    }
  }, [isOver]);

  const checkGameOver = () => {
    score === mode - 1 ? setIsOver(true) : setIsOver(false);
  };

  const resetGame = () => {
    setScore(0);
    changeMode(mode);
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
        <button className='resetBtn' type='button' onClick={resetGame}>
          RESET
        </button>
      </StMode>
      <StCards>{generateCards()}</StCards>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen((prev) => !prev)}></Modal>
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
      width: 0%;
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 1;
      top: 0;
      z-index: -12;
      transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
      box-shadow: 0.2rem 0rem 1.4rem rgba(0, 0, 0, 0.6);
    }
    &::after {
      content: '';
      width: 0%;
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.colors.Zzangu_White};
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 0;
      top: 0;
      z-index: -15;
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
