import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import AccommodationContainer from '../List/components/AccomodationContainer';
import WishListNone from './WishListNone';
import styled from 'styled-components';

function WishList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/LIST_DATA/ACCOMODATION.json')
      .then(res => res.json())
      .then(res => setData(res.ACCOMODATION));
  }, []);

  return (
    <>
      <Header page={'위시리스트'} />

      <WishHotel>
        {!data.length > 0 ? (
          data.map((el, id) => {
            return (
              <AccommodationContainer key={id} page={'recent'} data={el} />
            );
          })
        ) : (
          <WishListNone page={'위시리스트'} />
        )}
      </WishHotel>
    </>
  );
}

export default WishList;

const WishHotel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
