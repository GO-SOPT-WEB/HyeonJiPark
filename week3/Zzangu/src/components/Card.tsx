import React from 'react';
import styled, { css } from 'styled-components';

import { ImgZzanguBack } from '../assets/images';

interface CardProps {
  id: number;
  src: string;
  alt: string;
  isFlipped: boolean;
  isMatched: boolean;
  handleFlip: (id: number) => void;
}

const Card = ({ id, src, alt, isFlipped, isMatched, handleFlip }: CardProps) => {
  return (
    <StCardWrapper onClick={() => handleFlip(id)} isFlipped={isFlipped} isMatched={isMatched}>
      {isFlipped ? (
        <img className='cardFront' src={src} alt={alt} />
      ) : (
        <img className='cardBack' src={ImgZzanguBack} alt='카드뒷면' />
      )}
    </StCardWrapper>
  );
};

export default Card;

const StCardWrapper = styled.article<{ isFlipped: boolean; isMatched: boolean }>`
  display: flex;

  width: 20rem;
  height: 25rem;

  margin: 2rem;

  background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};
  border-radius: 2rem;
  transition: transform 0.6s;

  & > img {
    width: 100%;
    border-radius: 2rem;
  }

  & > .cardFront {
    transform: rotateY(0deg);
  }

  & > .cardBack {
    transform: rotateY(180deg);
  }

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}

  ${({ isMatched }) =>
    isMatched &&
    css`
      transform: scale(1.1);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    `}
`;
