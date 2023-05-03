import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return <CardWrapper></CardWrapper>;
};

export default Card;

const CardWrapper = styled.article`
  width: 20rem;
  height: 25rem;

  margin: 2rem;

  background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};
  border-radius: 2rem;
`;
