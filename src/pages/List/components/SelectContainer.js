import React, { useState } from 'react';
import { Location } from '@styled-icons/ionicons-outline/Location';
import { CalendarMinus } from '@styled-icons/bootstrap/CalendarMinus';
import LocationMenu from './Location';
import styled from 'styled-components';

import { useModalDispatch } from '../../../Contexts/ModalContext/ModalContext';
import { TOGGLEMODAL } from '../../../Contexts/constants';
function SelectContainer({ onClick, selectedDay }) {
  const [selectedTown, setSelectedTown] = useState('');

  const fromM = selectedDay?.from?.month;
  const fromD = selectedDay?.from?.day;
  const toM = selectedDay?.to?.month || fromM;
  const toD = selectedDay?.to?.day || fromD;

  const onClose = () => {
    modalDispatch({ type: TOGGLEMODAL, id: 'modal_1' });
  };

  const townName = name => {
    setSelectedTown(name);
    onClose();
  };

  const [_, modalDispatch] = useModalDispatch();

  return (
    <>
      <SelectBar>
        <LocationBar>
          <LocationButton onClick={() => onClick('modal_1')}>
            {selectedTown}
            <LocationPoint />
          </LocationButton>
          <LocationMenu townName={townName} />
        </LocationBar>

        <DateButton onClick={() => onClick('modal_2')}>
          <CalenderIcon />
          {`${fromM}.${fromD} ~ ${toM}.${toD}`}
        </DateButton>
      </SelectBar>
    </>
  );
}

export default SelectContainer;

const LocationBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationPoint = styled(Location)`
  position: absolute;
  top: 10px;
  left: 5px;
  width: 18px;
`;

const LocationButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 370px;
  height: 36px;
  margin: 10px;
  padding-top: 5px;
  background-color: #eee;
  cursor: pointer;
`;

const CalenderIcon = styled(CalendarMinus)`
  position: absolute;
  top: 9px;
  left: 7px;
  width: 18px;
`;

const DateButton = styled.button`
  position: relative;
  width: 370px;
  height: 36px;
  margin: 10px;
  border: 0;
  outline: 0;
  background-color: #eee;
  cursor: pointer;
`;

const SelectBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 768px;
  border-bottom: 1px solid #eee;
  background-color: white;
  z-index: 1;
`;
