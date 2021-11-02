import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SelectContainer from './components/SelectContainer';
import AccommodationContainer from './components/AccomodationContainer';
// import InfiniteScroll from './components/InfiniteScroll';
import styled from 'styled-components';
import { useCalendarDispatch } from '../../Contexts/CalendarContext/CalendarContext';
import { CalendarContainer } from '../../components/Calendar/CalendarContainer';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import { TOGGLEMODAL, TOGGLEXBTN } from '../../Contexts/constants';
import Uprasing from '../../components/Modals/Uprasing';

function List({ match }) {
  const id = match.params.id;
  const [data, setData] = useState([]);
  const [{ className }, modalDispatch] = useModalDispatch();
  const [{ selectedDay }, calendarDispatch] = useCalendarDispatch();

  const onClick = () => {
    window.scrollTo(0, 0);
    modalDispatch({ type: TOGGLEMODAL });
  };

  useEffect(() => {
    getData();
    modalDispatch({ type: TOGGLEXBTN });
  }, []);

  const getData = () => {
    fetch('/data/LIST_DATA/ACCOMODATION.json')
      .then(res => res.json())
      .then(res => setData(res.ACCOMODATION));
  };

  return (
    <>
      <Uprasing>
        <CalendarContainer priceShow={false} />
      </Uprasing>
      <Header />
      <MainList>
        <SelectContainer onClick={onClick} selectedDay={selectedDay} />
        {data.map((element, id) => {
          return <AccommodationContainer key={id} data={element} />;
        })}
        {/* <InfiniteScroll /> */}
      </MainList>
    </>
  );
}

export default List;

const MainList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
