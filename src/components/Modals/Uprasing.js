import React from 'react';
import styled from 'styled-components';

function Uprasing({ onCancel, y, second, children }) {
  return (
    <>
      <Conatiner y={y} second={second}>
        <BackButton onClick={onCancel}>✕</BackButton>
        {children || null}
      </Conatiner>
    </>
  );
}

export default Uprasing;

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
  transition: all linear ${({ second }) => second}s;
  transform: translateY(${({ y }) => y}px);
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
