import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ReservationDataList from './Components/ReservationDataList';
import ReservationListNone from './Components/ReservationListNone';
import styled from 'styled-components';

function Reservation() {
  const [expectedClicked, setExpectedClicked] = useState(true);
  const [completedClicked, setCompletedClicked] = useState(false);

  const [expectedList, setExpectedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const showHandler = condition => {
    setExpectedClicked(condition === 'expected' ? true : false);
    setCompletedClicked(condition === 'expected' ? false : true);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/ReservationList/EXPECTEDLIST.json')
      .then(res => res.json())
      .then(res => setExpectedList(res.ExpectedList));

    fetch('http://localhost:3000/data/ReservationList/COMPLETEDLIST.json')
      .then(res => res.json())
      .then(res => setCompletedList(res.CompletedList));
  }, []);

  return (
    <>
      <Header page={'예약/구매내역'} />
      <ReservationBox>
        <SelectReservation>
          <UseScheduled
            bold={expectedClicked && 'bold'}
            onClick={() => {
              showHandler('expected');
            }}
          >
            이용예정
            <UnderLine clicked={expectedClicked} />
          </UseScheduled>
          <UseScheduled
            bold={completedClicked && 'bold'}
            onClick={() => {
              showHandler('completed');
            }}
          >
            이용완료
            <UnderLine clicked={completedClicked} />
          </UseScheduled>
        </SelectReservation>
        <List>
          {expectedClicked &&
            (expectedList.length > 0 ? (
              expectedList.map((data, id) => {
                return <ReservationDataList key={id} data={data} />;
              })
            ) : (
              <ReservationListNone />
            ))}
          {completedClicked &&
            (completedList.length > 0 ? (
              completedList.map((data, id) => {
                return <ReservationDataList key={id} data={data} />;
              })
            ) : (
              <ReservationListNone />
            ))}
        </List>
      </ReservationBox>
    </>
  );
}

export default Reservation;

const List = styled.div`
  width: 100%;
  padding: 16px 16px 80px;
  background-color: rgb(240, 240, 240);
`;

const UnderLine = styled.div`
  margin-top: 13px;
  border-top: solid 3px ${props => (props.clicked ? '#6e2c9b' : '#ffffff')};
`;

const UseScheduled = styled.div`
  padding: 20px 20px 0;
  color: #6e2c9b;
  font-size: 12px;
  line-height: 8px;
  font-weight: ${props => props.bold};
  cursor: pointer;
`;

const SelectReservation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ReservationBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`;
