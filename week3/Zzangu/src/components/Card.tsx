import React from 'react';
import styled from 'styled-components';

interface CardProps {
  src: string;
  alt: string;
  isFlipped: boolean;
  handleClick: (id: number) => void;
}

const Card = ({ src, alt, isFlipped, handleClick }: CardProps) => {
  return (
    <StCardWrapper>
      <img src={src} alt={alt} />
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
