import React from 'react';
import styled from 'styled-components';

function SelectContainer() {
  return (
    <SelectBar>
      <LocationBar></LocationBar>
      <DateBar></DateBar>
    </SelectBar>
  );
}

export default SelectContainer;

const LocationBar = styled.div`
  width: 370px;
  height: 36px;
  background-color: blue;
`;

const DateBar = styled.div`
  width: 370px;
  height: 36px;
  background-color: red;
`;

const SelectBar = styled.header`
  display: flex;
  width: 768px;
  background-color: gray;
`;
