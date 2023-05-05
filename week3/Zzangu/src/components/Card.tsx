import React from 'react';
import styled, { css } from 'styled-components';

import { ImgZzanguBack } from '../assets/images';

interface CardProps {
  id: number;
  src: string;
  alt: string;
  isFlipped: boolean;
  handleClick: (id: number) => void;
}

const Card = ({ id, src, alt, isFlipped, handleClick }: CardProps) => {
  return (
    <StCardWrapper onClick={() => handleClick(id)} isFlipped={isFlipped}>
      {isFlipped ? (
        <img className='cardFront' src={src} alt={alt} />
      ) : (
        <img className='cardBack' src={ImgZzanguBack} alt='카드뒷면' />
      )}
    </StCardWrapper>
  );
};

export default Card;

const StCardWrapper = styled.article<{ isFlipped: boolean }>`
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
`;
