import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Category from './Category';
import Footer from '../../components/Footer/Footer.js';
import Grid from '../../components/Grid/Grid';
import styled from 'styled-components';

function Main() {
  const [carouselItem, setCarouselItem] = useState([]);
  const [locationItem, setLocationItem] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const URLs = ['/carousel', '/locations', '/category'];
  const getAllData = URLs => {
    return Promise.all(URLs.map(fetchData));
  };

  const fetchData = URL => {
    return axios
      .get(URL)
      .then(function (res) {
        return { success: true, data: res.data };
      })
      .catch(function (err) {
        return {
          success: false,
        };
      });
  };

  useEffect(() => {
    const loadItem = () => {
      try {
        getAllData(URLs).then(res => {
          setCarouselItem(res[0].data);
          setLocationItem(res[1].data);
          setCategoryItem(res[2].data);
        });
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
      <Category categoryItem={categoryItem} />
      <Grid
        locationItem={locationItem.seoul}
        width="720"
        type="grid4x4"
        title="고민타파! WeHotel 최고 인기의 서울 호텔 Best4"
        subTitle="한주간 예약율이 가장 높은 Weekly Choice!"
      />
      <Grid
        locationItem={locationItem.pusan}
        width="720"
        type="grid4x4"
        title="오늘만 특별할인! 부산으로 떠날 절호의 기회!"
        subTitle="부산의 낭만을 선사해줄 WeHotel만의 특별한 선택!"
      />
      <Grid
        locationItem={locationItem.jeju}
        width="720"
        type="grid4x4"
        title="신혼여행객들을 위한 WeHotel의 깜짝 이벤트~!"
        subTitle="인생 최고의 경험을 위해 특별한 호텔을 준비했어요~!"
      />
      <Grid
        locationItem={locationItem.gangwon}
        width="720"
        type="grid4x4"
        title="멀리가지마세요~ 강원가세요~!"
        subTitle="볼거리와 먹을거리 둘다 놓치지 않기 위한 스페셜강원!"
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
