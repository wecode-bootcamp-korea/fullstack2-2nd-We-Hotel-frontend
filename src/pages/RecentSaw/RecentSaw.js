import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import AccommodationContainer from '../List/components/AccomodationContainer';
import RecentSawNone from './RecentSawNone';
import styled from 'styled-components';

function RecentSaw() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/LIST_DATA/ACCOMODATION.json')
      .then(res => res.json())
      .then(res => setData(res.ACCOMODATION));
  }, []);

  return (
    <>
      <Header page={'최근 본 상품'} />
      <RecentHotel>
        {!data.length > 0 ? (
          data.map((el, id) => {
            return (
              <AccommodationContainer key={id} page={'recent'} data={el} />
            );
          })
        ) : (
          <RecentSawNone />
        )}
      </RecentHotel>
    </>
  );
}

export default RecentSaw;

const RecentHotel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
