import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Category from './Category';
import Footer from '../../components/Footer/Footer.js';
import Grid from '../../components/Grid/Grid';
import styled from 'styled-components';

function Main({ history }) {
  const [carouselItem, setCarouselItem] = useState([]);
  const [locationItem, setLocationItem] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);

  useEffect(() => {
    const loadItem = async () => {
      try {
        let resCarousel = await axios.get('/carousel');
        let resLocations = await axios.get('/locations');
        let resCategory = await axios.get('/category');
        setCarouselItem(resCarousel.data);
        setLocationItem(resLocations.data);
        setCategoryItem(resCategory.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadItem();
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
      <Category
        categoryItem={categoryItem}
        _onClick={() => {
          history.push(`/location/{}`);
        }}
      />
      <Grid
        locationItem={locationItem.seoul}
        width="720"
        type="grid4x4"
        title="고민타파! WeHotel 최고 인기의 서울 호텔 Best4"
        subTitle="한주간 예약율이 가장 높은 Weekly Choice!"
        _onClick={() => {
          history.push(`/location/seoul`);
        }}
      />
      <Grid
        locationItem={locationItem.pusan}
        width="720"
        type="grid4x4"
        title="오늘만 특별할인! 부산으로 떠날 절호의 기회!"
        subTitle="부산의 낭만을 선사해줄 WeHotel만의 특별한 선택!"
        _onClick={() => {
          history.push(`/location/pusan`);
        }}
      />
      <Grid
        locationItem={locationItem.jeju}
        width="720"
        type="grid4x4"
        title="신혼여행객들을 위한 WeHotel의 깜짝 이벤트~!"
        subTitle="인생 최고의 경험을 위해 특별한 호텔을 준비했어요~!"
        _onClick={() => {
          history.push(`/location/jeju`);
        }}
      />
      <Grid
        locationItem={locationItem.gangwon}
        width="720"
        type="grid4x4"
        title="멀리가지마세요~ 강원가세요~!"
        subTitle="볼거리와 먹을거리 둘다 놓치지 않기 위한 스페셜강원!"
        _onClick={() => {
          history.push(`/location/gangwon`);
        }}
      />
      <Footer />
    </Container>
  );
}

export default withRouter(Main);

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
