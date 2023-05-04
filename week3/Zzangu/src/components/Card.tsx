import React from 'react';
import styled from 'styled-components';

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
    <StCardWrapper onClick={() => handleClick(id)}>
      {isFlipped ? <img src={src} alt={alt} /> : <img src={ImgZzanguBack} alt='카드뒷면' />}
    </StCardWrapper>
  );
};

export default Card;

const StCardWrapper = styled.article`
  display: flex;

  width: 20rem;
  height: 25rem;

  margin: 2rem;

  background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};
  border-radius: 2rem;

  & > img {
    width: 100%;
    border-radius: 2rem;
  }
`;
