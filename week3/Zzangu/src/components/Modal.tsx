import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  //   children: React.ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isModalOpen, onClose }: ModalProps) => {
  if (!isModalOpen) return null;

  return createPortal(
    <>
      <ModalBackground onClick={onClose} />
      <ModalContainer>
        <p>🎉 게임 끝!! 🎉</p>
        <p>축하합니당</p>
        <CloseBtn onClick={onClose}>게임으로 돌아가기</CloseBtn>
      </ModalContainer>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  text-align: center;
  gap: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40rem;
  height: 30rem;
  padding: 4rem;

  background-color: #fff;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.Zzangu_LightPink};

  & > p {
    color: ${({ theme }) => theme.colors.Zzangu_Red};
    ${({ theme }) => theme.fonts.ZZangu_Title};
  }
`;

const CloseBtn = styled.button`
  width: 100%;

  padding: 1rem 2rem;
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.Zzangu_Blue};
  background-color: white;
  ${({ theme }) => theme.fonts.ZZangu_Score};

  border: 0.1rem solid black;
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 0rem 0rem ${({ theme }) => theme.colors.Zzangu_Blue};
  transition: 0.2s;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.Zzangu_Blue};
  }
`;

export default Modal;
