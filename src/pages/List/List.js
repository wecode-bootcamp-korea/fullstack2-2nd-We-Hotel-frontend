import React from 'react';
import SelectContainer from './components/SelectContainer';
import AccommodationContainer from './components/AccomodationContainer';
import styled from 'styled-components';

function List() {
  return (
    <MainList>
      <SelectContainer />
      <AccommodationContainer />
    </MainList>
  );
}

export default List;

const MainList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
