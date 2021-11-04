import React from 'react';
import styled from 'styled-components';
import { TOGGLEMODAL } from '../../Contexts/constants';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';

function Uprasing({ children, id }) {
  const [modalState, modalDispatch] = useModalDispatch();
  const { isShow, second, y, backBtnShow } = modalState[id];
  return isShow ? (
    <Container y={y} second={second}>
      <Wrapper>
        {backBtnShow && (
          <BackButton onClick={() => modalDispatch({ type: TOGGLEMODAL, id })}>
            ✕
          </BackButton>
        )}
        {children && children}
      </Wrapper>
    </Container>
  ) : null;
}
export default Uprasing;

const Container = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: max-content;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, 1);
  transition: all linear ${({ second }) => second}s;
  transform: translateY(${({ y }) => y}px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

const Wrapper = styled.div`
  max-width: min-content;
  position: relative;
  margin: 0 auto;
`;

const BackButton = styled.button`
  margin: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 100;

  :active {
    opacity: 0.6;
  }
`;
