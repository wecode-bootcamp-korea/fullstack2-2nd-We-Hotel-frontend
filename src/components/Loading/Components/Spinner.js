import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

function Spinner() {
  return (
    <Flex>
      <ClipLoader
        color={'#6e2c9b'}
        // loading={loading}
        size={60}
      />
    </Flex>
  );
}

export default Spinner;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
