import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Border from '../../components/Border/Border';
import { MoreBtn } from '../../styles/pakStyles';
import { useContext } from 'react/cjs/react.development';
import CalendarModal from './CalendarModal';
import DetailCarousel from './DetailCarousel';
import DetailMainHeader from './DetailMainHeader';
import DetailSectionA from './DetailSectionA';
import DetailSectionB from './DetailSectionB';

function DetailPresenter({ dates, getDateForm, funcs, states }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <CalendarModal />
      <Container>
        <DetailCarousel carouselItem={states?.carouselItem} theme={theme} />
        <Main className={states?.className}>
          <DetailMainHeader hotelInfo={states?.hotelInfo} />
          <Border height={11} color={theme.colors['gray-50']} />
          <DetailSectionA
            fromDate={dates?.fromDate}
            toDate={dates?.toDate}
            onClick={funcs?.onClick}
          />
          <DetailSectionB
            hotelInfo={states?.hotelInfo}
            calPrices={states?.calPrices}
            onChange={funcs?.onChange}
            getDateForm={getDateForm}
            option={states?.option}
          />
          <MoreBtn>더보기</MoreBtn>
        </Main>
      </Container>
    </>
  );
}

export default DetailPresenter;

const Container = styled.div`
  max-width: 768px;
  position: relative;
  padding-top: 40vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors['font-color']};
`;

const Main = styled.div`
  position: absolute;
  padding: 2rem 0;
  width: 100%;
  border-radius: 15px;
  background-color: white;

  &.show {
    display: none;
  }
`;
