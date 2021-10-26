import React, { useState, useEffect } from 'react';
import axios from 'axios';
import initMockAPI from '../../mocks';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.js';
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
      <Header page="main" />
      <Carousel
        carouselItem={carouselItem}
        type="main"
        width="720"
        height="360"
      />
      <Footer />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
