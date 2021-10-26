import React from 'react';
import styled from 'styled-components';
import Uprasing from '../../components/Modals/Uprasing';
import CalendarPresenter from '../../components/Calendar';
import { CalendarController } from '../../Hooks/CalendarController/CalendarController';
import { ModalController } from '../../Hooks/ModalController';

function Detail() {
  const { y, second, onClick, onCancel } = ModalController();

  const {
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
    getDateForm,
  } = CalendarController(1);

  return (
    <Container>
      <button onClick={onClick}>up modal</button>
      <Uprasing onCancel={onCancel} y={y} npm second={second} onClick={onClick}>
        <CalendarPresenter
          prices={prices}
          days={days}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          onDisabledDayError={onDisabledDayError}
        />
      </Uprasing>
    </Container>
  );
}

export default Detail;

const Container = styled.div``;
