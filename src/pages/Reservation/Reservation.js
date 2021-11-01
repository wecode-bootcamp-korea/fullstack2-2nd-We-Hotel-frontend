import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ReservationDataList from './ReservationDataList';
import ReservationListNone from './ReservationListNone';
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
            이용예정 {expectedClicked && <UnderLine />}
          </UseScheduled>
          <UseComplete
            bold={completedClicked && 'bold'}
            onClick={() => {
              showHandler('completed');
            }}
          >
            이용완료{completedClicked && <UnderLine />}
          </UseComplete>
        </SelectReservation>
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
      </ReservationBox>
    </>
  );
}

export default Reservation;

const UnderLine = styled.div`
  margin-top: 5px;
  border-top: solid 3px #6e2c9b;
`;

const UseScheduled = styled.div`
  font-size: 13px;
  font-weight: ${props => props.bold};
  color: #6e2c9b;
  padding: 20px 100px 20px 100px;
`;

const UseComplete = styled.div`
  font-size: 13px;
  color: #6e2c9b;
  padding: 20px 100px 20px 100px;
  font-weight: ${props => props.bold};
`;

const SelectReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReservationBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`;
