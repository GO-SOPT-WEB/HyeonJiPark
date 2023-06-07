import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: string;
  isReset?: boolean;
}

export const Button = ({ onClick, children, isReset }: ButtonProps) => (
  <StButton type='button' onClick={onClick} isReset={isReset}>
    {children}
  </StButton>
);

const StButton = styled.button<{ isReset?: boolean }>`
  padding: 1rem 2rem;
  ${({ theme }) => theme.fonts.ZZangu_Button2};

  color: ${({ theme }) => theme.colors.Zzangu_PinkBorder};
  background: ${({ theme }) => theme.colors.Zzangu_LightPink};
  border: 0.2rem solid ${({ theme }) => theme.colors.Zzangu_PinkBorder};
  border-radius: 1.5rem;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.Zzangu_DarkPink};
    border-radius: inherit;
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder};

    transform: translate3d(0, 0.75rem, -1rem);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.Zzangu_Pink};
    transform: translate(0, 0.25em);

    &::before {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder},
        0 0.5rem 0 0 ${({ theme }) => theme.colors.Zzangu_PinkShadow};
      transform: translate3d(0, 0.5rem, -1rem);
    }
  }

  &:active {
    background: ${({ theme }) => theme.colors.Zzangu_Pink};
    transform: translate(0rem, 0.75rem);

    &::before {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.Zzangu_PinkBorder},
        0 0 ${({ theme }) => theme.colors.Zzangu_PinkShadow};
      transform: translate3d(0, 0, -1em);
    }
  }

  ${({ isReset }) =>
    isReset &&
    css`
      position: absolute;
      right: 11%;
      overflow: hidden;
      z-index: 10;

      padding: 1rem 4rem;

      color: ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      background: ${({ theme }) => theme.colors.Zzangu_Yellow};
      ${({ theme }) => theme.fonts.ZZangu_Button1};
      border: 0.3rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
      border-radius: 5rem;

      transition: all 0.3s ease-in-out;

      &:hover {
        border: 0.1rem solid ${({ theme }) => theme.colors.Zzangu_YellowBorder};
        color: ${({ theme }) => theme.colors.Zzangu_White};
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -11%;
        left: -10%;
        z-index: -12;
        opacity: 1;

        width: 0%;
        height: 100%;

        background: ${({ theme }) => theme.colors.Zzangu_YellowBorder};

        transform: skewX(-20deg);
        transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
        box-shadow: 0.2rem 0rem 1.4rem rgba(0, 0, 0, 0.6);
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -10%;
        z-index: -15;
        opacity: 0;

        width: 0%;
        height: 100%;

        background: ${({ theme }) => theme.colors.Zzangu_White};

        transform: skewX(-20deg);
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
    `}
`;
