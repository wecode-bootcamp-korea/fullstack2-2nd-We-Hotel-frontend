import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrueReview from './TrueReview';
import Map from '../../components/Map/Map';
import styled from 'styled-components';

function Detail() {
  const [mapItem, setmapItem] = useState([]);

  useEffect(() => {
    const loadItem = async () => {
      try {
        let resMapItem = await axios.get('/detail');
        setmapItem(resMapItem.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    loadItem();
  }, []);

  return (
    <Container>
      <TrueReview trueReview />
      <Map mapItem={mapItem} width="768" />
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  width: 768px;
  height: 100vh;
  margin: 0 auto;
`;
