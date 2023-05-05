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

      <StScore>
        <p>점수</p>
        <p>
          {score} / {mode}
        </p>
      </StScore>
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

  padding: 4rem 0rem;
  background-color: ${({ theme }) => theme.colors.Zzangu_DarkPink};

  & > h1 {
    color: ${({ theme }) => theme.colors.Zzangu_Red};
    ${({ theme }) => theme.fonts.ZZangu_Title};
  }
`;

const StScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 11%;

  padding: 0.5rem 5rem;

  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};

  & > p {
    ${({ theme }) => theme.fonts.ZZangu_Score};
    color: ${({ theme }) => theme.colors.Zzangu_Red};
  }
`;
