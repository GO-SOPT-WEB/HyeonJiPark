import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ModeState, ScoreState } from '../recoil/atom';

const Header = () => {
  const mode = useRecoilValue(ModeState);
  const score = useRecoilValue(ScoreState);

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

  background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};
  border-radius: 3rem;

  & > p {
    ${({ theme }) => theme.fonts.ZZangu_Score};
    color: ${({ theme }) => theme.colors.Zzangu_Red};
  }
`;
