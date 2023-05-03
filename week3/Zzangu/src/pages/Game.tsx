import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Card from '../components/Card';

const Game = () => {
  return (
    <GameWrapper>
      <Header />
      <StMode>
        <button type='button'>Easy</button>
        <button type='button'>Normal</button>
        <button type='button'>Hard</button>
      </StMode>
      <Card />
      게임 페이지입니다!
    </GameWrapper>
  );
};

export default Game;

const GameWrapper = styled.section`
  height: 100vh;
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
