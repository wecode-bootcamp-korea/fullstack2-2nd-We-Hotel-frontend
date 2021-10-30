import React from 'react';
import styled from 'styled-components';

function Uprasing({ onCancel, y, second, children, className }) {
  return (
    <Modal>
      <Container y={y} second={second} className={className || ''}>
        <Wrapper>
          <BackButton onClick={onCancel}>✕</BackButton>
          {children || null}
        </Wrapper>
      </Container>
    </Modal>
  );
}

export default Uprasing;

const Modal = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: red;
`;
const Container = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background: #ffffff;
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
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BackButton = styled.button`
  margin: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;

  :active {
    opacity: 0.6;
  }
`;
