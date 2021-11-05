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
  const { mainId, subId } = match.params;
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [modalState, modalDispatch] = useModalDispatch();
  const [{ selectedDay }, calendarDispatch] = useCalendarDispatch();

  const listModalId1 = 'modal_1';
  const listModalId2 = 'modal_2';

  const onClick = id => {
    window.scrollTo(0, 0);
    modalDispatch({ type: TOGGLEMODAL, id });
  };

  useEffect(() => {
    if (!subId) {
      getData();
    } else {
      getSubData();
    }
    modalDispatch({ type: TOGGLEXBTN, id: listModalId2 });
    modalDispatch({ type: TOGGLEXBTN, id: listModalId1 });
  }, []);

  const getData = () => {
    fetch(`http://localhost:8000/accommodation/main/${mainId}`)
      .then(res => res.json())
      .then(res => setData(res.DATA));
  };
  const getSubData = () => {
    fetch(`http://localhost:8000/accommodation/sub/${subId}`)
      .then(res => res.json())
      .then(res => setData(res.DATA));
  };
  // const getLocationData = () => {
  //   fetch(`http://localhost:8000/accommodation/filter/location/${subId}`)
  //     .then(res => res.json())
  //     .then(res => setData(res.DATA));
  // };
  console.log(data);
  return (
    <>
      <Uprasing id={listModalId2}>
        <CalendarContainer priceShow={false} modalId={listModalId2} />
      </Uprasing>
      <Header />
      <MainList>
        <SelectContainer onClick={onClick} selectedDay={selectedDay} />
        {data &&
          data.map((element, id) => {
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
  max-width: 768px;
  margin: 0 auto;
`;
