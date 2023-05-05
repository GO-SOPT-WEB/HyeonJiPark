import React from 'react';
import ReactDom, { createPortal } from 'react-dom';
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
        🎉 게임 끝!! 축하합니당 🎉
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

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30rem;
  height: 20rem;
  padding: 4rem;

  background-color: #fff;
  ${({ theme }) => theme.fonts.ZZangu_Pretendard_Medium_16};
  border-radius: 2rem;
`;

const CloseBtn = styled.button`
  padding: 0rem 2rem;

  width: 100%;
  height: 3rem;

  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 0rem 0rem #3b82f6;
  transition: 0.2s;

  &:hover {
    color: white;
    background-color: #3b82f6;
  }
`;

export default Modal;
