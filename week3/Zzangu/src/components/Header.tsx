import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  mode: number;
  score: number;
}

const Header = ({ mode, score }: HeaderProps) => {
  return (
    <StHeader>
      <h1>짱구는 못말려!</h1>
      <p>점수</p>
      <p>
        {score} / {mode}
      </p>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 13rem;

  background-color: ${({ theme }) => theme.colors.Zzangu_DarkPink};

  & > h1 {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Bold_35};
  }
  & > p {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Semibold_20};
  }
`;
