import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <h1>짱구는 못말려!</h1>
      <p>점수</p>
      <button type='button'>Reset</button>
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

  background-color: ${({ theme }) => theme.colors.Zzangu_Red};

  & > h1 {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Bold_35};
  }
  & > p {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Semibold_20};
  }
  & > button {
    position: absolute;
    right: 5%;

    padding: 1rem 2rem;

    background: inherit;
    background-color: ${({ theme }) => theme.colors.Zzangu_Yellow};
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Semibold_20};
    border: none;
    border-radius: 2rem;
  }
`;
