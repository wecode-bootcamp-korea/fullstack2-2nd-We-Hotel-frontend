import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Border from '../../components/Border/Border';
import { MoreBtn } from '../../styles/detailStyles';
import { useContext } from 'react/cjs/react.development';
import CalendarModal from './CalendarModal';
import DetailCarousel from './DetailCarousel';
import DetailMainHeader from './DetailMainHeader';
import DetailSectionA from './DetailSectionA';
import DetailSectionB from './DetailSectionB';
import TrueReview from './TrueReview';

function DetailPresenter({ dates, getDateForm, funcs, states }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <CalendarModal />
      <Container>
        {!states?.isShow && (
          <>
            <DetailCarousel carouselItem={states?.carouselItem} />
            <Main>
              <DetailMainHeader hotelInfo={states?.hotelInfo} />
              <Border height={11} color={theme.colors['gray-50']} />
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
              {/* <TrueReview trueReview /> */}
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
