import React, { useState, useEffect } from 'react';
import axios from 'axios';
import initMockAPI from '../../mocks';
import Carousel from '../../components/Carousel/Carousel';
import styled from 'styled-components';

function Main() {
  const [carouselItem, setCarouselItem] = useState([]);

  const loadCarouselItem = async () => {
    try {
      let response = await axios.get('/carousel');
      setCarouselItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    if (process.env.NODE_ENV === 'development') {
      await initMockAPI();
    }

    loadCarouselItem();
  }, []);

  return (
    <Container>
      <Carousel
        carouselItem={carouselItem}
        type="main"
        width="720"
        height="360"
      />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
