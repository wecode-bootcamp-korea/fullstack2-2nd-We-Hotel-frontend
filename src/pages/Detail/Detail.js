import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ROUTES } from '../../utils/constants';
import Carousel from '../../components/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Border from '../../components/Border/Border';
import { BasicButton, Message, Title } from '../../styles/pakStyles';
import CallBox from './components/CallBox';
import { useState } from 'react/cjs/react.development';
import {
  getDistanceDate,
  getFromNowDate,
  getMonthDay,
  setCurPickDate,
} from './utils';
import { ModalController } from '../../Hooks/ModalController';
import { CalendarController } from '../../Hooks/CalendarController/CalendarController';
import Uprasing from '../../components/Modals/Uprasing';
import CalendarPresenter from '../../components/Calendar/CalendarPresenter';
import { getDataAllPromise } from '../../utils/pakUtils';
import Loading from '../../components/Loading/Loading';
import Room from './components/Room';
import SelectBtns from './components/SelectBtns';

function Detail() {
  const [pickDate, setPickDate] = useState({
    from: getMonthDay(new Date()),
    to: getFromNowDate(2),
  });

  const [loading, setLoading] = useState(true);
  const [carouselItem, setCarouselItem] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);

  useEffect(() => {
    getDataAllPromise({
      args: [
        { setFunc: setCarouselItem, url: ROUTES.DETAIL_CAROCEL },
        { setFunc: setHotelInfo, url: ROUTES.DETAIL_INFO },
      ],
      setLoading,
    });
  }, []);

  const { onCancel, y, second, onClick, className } = ModalController();
  const {
    getDateForm,
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
  } = CalendarController(1);

  const onPick = () => {
    setCurPickDate({ getDateForm, setFun: setPickDate });
    onCancel();
  };

  // const d = getDistanceDate(getDateForm);
  // console.log(getDateForm, d);

  const theme = useContext(ThemeContext);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Uprasing onCancel={onCancel} y={y} second={second} className={className}>
        <CalendarPresenter
          prices={prices}
          days={days}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          onDisabledDayError={onDisabledDayError}
        />
        <MoreBtn onClick={() => onPick()}>선택완료</MoreBtn>
      </Uprasing>
      <Container>
        <Wrapper>
          <Carousel
            carouselItem={carouselItem}
            type="main"
            width="720"
            height={theme.WIDTHS.HEIGHT / 2.5}
          />
        </Wrapper>
        <Main className={className}>
          <MainHeader>
            <Message>{hotelInfo[0].grade}</Message>
            <Title>{hotelInfo[0].title}</Title>
            <Message>
              <FontAwesomeIcon className="thumbIcon" icon={faThumbsUp} />
              <LikeCount>{hotelInfo[0].likeCount}</LikeCount>
              <LikeMessage>명이 좋아합니다 </LikeMessage>
            </Message>
            <Border margin={5} />
            <Message>데일리 트루어워즈</Message>
          </MainHeader>
          <Border height={11} color={theme.COLORS['gray-50']} />

          <SectionA>
            <MainTitle>
              객실 선택 <Message>(세금/봉사료 포함)</Message>
            </MainTitle>
            <CallBox
              onClick={() => onClick('show')}
              text={`${pickDate.from} - ${pickDate.to} ・ ${
                !getDistanceDate(pickDate)
                  ? '무'
                  : `(${getDistanceDate(pickDate)})`
              }박`}
            />
          </SectionA>
          <SectionB>
            <SelectBtns />
            {hotelInfo[0].rooms.map(item => (
              <Room key={item.id} item={item} />
            ))}
          </SectionB>
          <MoreBtn>더보기</MoreBtn>
        </Main>
      </Container>
    </>
  );
}

export default Detail;

export const MoreBtn = styled(BasicButton)`
  width: 80%;
  margin: 1.2rem auto;
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.COLORS['purple-200']};
  border: 1px solid ${({ theme }) => theme.COLORS['purple-200']};
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
`;

const MainTitle = styled(Title)`
  font-size: 1.3rem;
`;

const MainHeader = styled.div`
  ${({ theme }) =>
    theme.MIXINS.FLEX({ direction: 'column', item: 'flex-start' })}
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS['gray-100']};
`;

const SectionA = styled(MainHeader)`
  background-color: white;
`;

const SectionB = styled(MainHeader)`
  display: grid;
  grid-gap: 0.7rem;
  grid-template-rows: repeat(auto, 1fr);
  justify-content: stretch;
  padding: 0;
  background-color: ${({ theme }) => theme.COLORS['gray-50']};
`;

const LikeCount = styled(Title)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.COLORS['font-color']};
  font-weight: 600;
`;

const LikeMessage = styled(Message)`
  font-size: 0.9rem;
  margin-left: 0;
`;

const Container = styled.div`
  max-width: 768px;
  position: relative;
  padding-top: 40vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS['font-color']};

  .thumbIcon {
    margin-right: 0.2rem;
    color: ${({ theme }) => theme.COLORS['blue-100']};
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
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
