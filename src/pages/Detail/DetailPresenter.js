import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Border from '../../components/Border/Border';
import { MoreBtn } from '../../styles/detailStyles';
import CalendarModal from './CalendarModal';
import DetailCarousel from './DetailCarousel';
import DetailMainHeader from './DetailMainHeader';
import DetailSectionA from './DetailSectionA';
import DetailSectionB from './DetailSectionB';
import Map from '../../components/Map/Map';
import TrueReview from './TrueReview';
import axios from 'axios';

function DetailPresenter({ dates, getDateForm, funcs, states }) {
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
    <>
      <CalendarModal />
      <Container>
        {!states?.isShow && (
          <>
            <DetailCarousel carouselItem={states?.carouselItem} />
            <Main>
              <DetailMainHeader hotelInfo={states?.hotelInfo} />
              <Border height={11} color={'white'} />
              <DetailSectionA
                fromDate={dates?.fromDate}
                toDate={dates?.toDate}
                onClick={funcs.onClick}
              />
              <DetailSectionB
                hotelInfo={states?.hotelInfo}
                calPrices={states?.calPrices}
                onChange={funcs?.onChange}
                getDateForm={getDateForm}
                option={states?.option}
              />

              <MoreBtn>더보기</MoreBtn>
              <TrueReview trueReview />
              <Map mapItem={mapItem} width="768" />
            </Main>
          </>
        )}
      </Container>
    </>
  );
}

export default DetailPresenter;

const Container = styled.div`
  justify-content: center;
  position: relative;
  max-width: 768px;
  padding-top: 60vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors['font-color']};
`;

const Main = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 0;
  width: 100%;
  border-radius: 15px;
  background-color: white;
`;
