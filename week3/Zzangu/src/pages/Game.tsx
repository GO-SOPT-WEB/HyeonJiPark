import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';
import ZZANGU_LIST from '../datas/zzanguList';
import { Zzangu } from '../datas/zzanguList';

const Game = () => {
  // 카드 섞기
  const shuffleCards = () => {
    return [...ZZANGU_LIST, ...ZZANGU_LIST].sort((first, second) => 0.5 - Math.random());
  };

  // 섞은 카드 리스트
  const [cardList, setCardList] = useState(
    shuffleCards().map((card: Zzangu) => {
      return {
        id: card.id,
        src: card.src,
        alt: card.alt,
        flipped: false,
        matched: false,
      };
    }),
  );

  // 뒤집은 카드 리스트
  const [flippedCardList, setFlippedCardList] = useState([]);

  // 카드 뒤집기
  const flipCard = (id: number) => {
    return cardList.map((card) => {
      const showCard = { ...card };
      // if (showCard.id === id)
    });
  };

  // 카드 클릭 시
  const hancleClick = (id: number) => {
    const selectedCard = cardList.map((card) => {
      if (card.id === id) {
      }
    });
  };

  // 카드 배치하기
  const generateCards = () => {
    return cardList.map((card) => {
      return (
        <Card
          key={card.id}
          src={card.src}
          alt={card.alt}
          isFlipped={card.flipped}
          handleClick={hancleClick}
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

    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.Zzangu_White};
    background-color: ${({ theme }) => theme.colors.Zzangu_Gray};
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Medium_16};
  }
`;

const StCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
