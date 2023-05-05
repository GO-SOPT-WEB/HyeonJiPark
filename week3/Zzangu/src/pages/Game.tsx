import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';
import ZZANGU_LIST from '../datas/zzanguList';
import { Zzangu } from '../datas/zzanguList';

interface Cards {
  id: number;
  answer: number;
  src: string;
  alt: string;
  flipped: boolean;
  matched: boolean;
}

const EASY = 5;
const NORMAL = 7;
const HARD = 9;

const Game = () => {
  // 난이도 선택
  const changeMode = () => {};

  // 카드 섞기
  const shuffleCards = (card: Zzangu[]) => {
    const duplicatedCards = [...card, ...card];

    let currentIndex = duplicatedCards.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = card[currentIndex];

      if (temporaryValue) {
        duplicatedCards[currentIndex] = duplicatedCards[randomIndex];
        duplicatedCards[randomIndex] = temporaryValue;
      }
    }

    return duplicatedCards;
  };

  // 섞은 카드 리스트
  const [cardList, setCardList] = useState<Cards[]>(
    shuffleCards(ZZANGU_LIST).map((card: Zzangu, index: number) => {
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
      console.log(flippedCards, '두개 뒤집힘');

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
    console.log(id);
    setFlippedCards([...flippedCards, id]);

    const newCardList = cardList.map((card) => {
      const showCard = { ...card };
      if (showCard.id === id && !showCard.flipped && !showCard.matched) {
        showCard.flipped = true;
        // setFlippedCards([...flippedCards, id]);
      }
      return showCard;
    });

    setCardList(newCardList);
  };

  // 카드 매칭되었는지 확인
  const isMatchedCard = (first: Cards, second: Cards) => {
    console.log('매칭 확인');
    if (first) {
      console.log('first', first.answer);
      console.log('second', second.answer);
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
  };

  // 카드 클릭 시
  const handleClick = (id: number) => {
    // 2개까지만 클릭 가능
    if (flippedCards.length === 2) {
      return;
    }

    // 카드 뒤집기
    flipCard(id);
  };

  // 카드 배치하기
  const generateCards = () => {
    console.log(cardList);
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

  return (
    <GameWrapper>
      <Header />
      <StMode>
        <button type='button'>Easy</button>
        <button type='button'>Normal</button>
        <button type='button'>Hard</button>
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
