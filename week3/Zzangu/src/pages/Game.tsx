import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Game = () => {
  return (
    <GameWrapper>
      <Header />
      <StMode>
        <button type='button'>Easy</button>
        <button type='button'>Normal</button>
        <button type='button'>Hard</button>
      </StMode>
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
  height: 10rem;
`;
