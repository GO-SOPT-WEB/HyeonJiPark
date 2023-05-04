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
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Medium_16};

    background: ${({ theme }) => theme.colors.Zzangu_lightPink};
    border: 0.2rem solid ${({ theme }) => theme.colors.Zzangu_pinkBorder};
    border-radius: 1.5rem;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
    background: 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.Zzangu_darkPink};
      border-radius: inherit;
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_pinkBorder};
      transform: translate3d(0, 0.75rem, -1rem);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
      background: ${({ theme }) => theme.colors.Zzangu_pink};
      transform: translate(0, 0.25em);

      &::before {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_pinkBorder},
          0 0.5rem 0 0 ${({ theme }) => theme.colors.Zzangu_pinkShadow};
        transform: translate3d(0, 0.5rem, -1rem);
      }
    }

    &:active {
      background: ${({ theme }) => theme.colors.Zzangu_pink};
      transform: translate(0rem, 0.75rem);

      &::before {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_pinkBorder},
          0 0 ${({ theme }) => theme.colors.Zzangu_pinkShadow};
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
