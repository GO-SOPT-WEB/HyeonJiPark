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

  background-color: ${({ theme }) => theme.colors.Zzangu_DarkPink};

  & > h1 {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Bold_35};
  }
  & > p {
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Semibold_20};
  }
  & > button {
    position: absolute;
    right: 10%;
    overflow: hidden;
    z-index: 10;
    padding: 1rem 4rem;

    color: ${({ theme }) => theme.colors.Zzangu_Black};
    background: ${({ theme }) => theme.colors.Zzangu_Yellow};
    ${({ theme }) => theme.fonts.ZZangu_Pretendard_Semibold_20};
    border: 0.3rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
    border-radius: 5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      color: ${({ theme }) => theme.colors.Zzangu_White};
    }
    &::before {
      content: '';
      width: 0%;
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 1;
      top: 0;
      z-index: -12;
      transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
      box-shadow: 0.2rem 0rem 1.4rem rgba(0, 0, 0, 0.6);
    }
    &::after {
      content: '';
      width: 0%;
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.colors.Zzangu_White};
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 0;
      top: 0;
      z-index: -15;
      transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
      box-shadow: 0.2rem, 0rem 1.4rem rgba(0, 0, 0, 0.6);
    }
    &:hover::before {
      opacity: 1;
      width: 116%;
    }
    &:hover::after {
      opacity: 1;
      width: 120%;
    }
  }
`;
