import React from 'react';
import styled from 'styled-components';
import { CLOSE } from '../../Contexts/constants';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';

function Uprasing({ children }) {
  const [{ y, second, className, backBtnShow }, modalDispatch] =
    useModalDispatch();

  return (
    <Container y={y} second={second} className={className || ''}>
      <Wrapper>
        <BackButton
          className={backBtnShow || 'none'}
          onClick={() => modalDispatch({ type: CLOSE })}
        >
          ✕
        </BackButton>
        {children && children}
      </Wrapper>
    </Container>
  );
}
export default Uprasing;

const Container = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: max-content;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, 1);
  transition: all linear ${({ second }) => second}s;
  transform: translateY(${({ y }) => y}px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  &.show {
    display: block;
  }
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

  &.none {
    display: none;
  }

  :active {
    opacity: 0.6;
  }
`;
