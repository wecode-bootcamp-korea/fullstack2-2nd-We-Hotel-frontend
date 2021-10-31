import React, { useEffect } from 'react';
import { ROUTES } from '../../utils/constants';
import { useState } from 'react/cjs/react.development';
import { getAveragePrice } from './utils';
import { ModalController } from '../../Hooks/ModalController';
import { CalendarController } from '../../Hooks/CalendarController/CalendarController';
import { getDataAllPromise } from '../../utils/pakUtils';
import Loading from '../../components/Loading/Loading';
import { OPTIONS } from './constants';
import DetailPresenter from './DetailPresenter';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';

function Detail() {
  const {
    onCancel,
    y,
    second,
    onClick,
    className,
    backBtnShow,
    setBackBtnShow,
  } = ModalController();

  const {
    getDateForm,
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
    fromDate,
    toDate,
  } = CalendarController(1);

  const [loading, setLoading] = useState(true);
  const [carouselItem, setCarouselItem] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [option, setOption] = useState(OPTIONS.ONEDAY);

  // const [{ y, second, className, backBtnShow }, dispatch] = useModalDispatch();

  useEffect(() => {
    getDataAllPromise({
      args: [
        { setFunc: setCarouselItem, url: ROUTES.DETAIL_CAROCEL },
        { setFunc: setHotelInfo, url: ROUTES.DETAIL_INFO },
      ],
      setLoading,
    });

    // dispatch({type:})

    setBackBtnShow(false);
  }, []);

  const onChange = e => {
    setOption(e.target.id);
  };

  const percents = prices;

  const roomPrices = hotelInfo[0]?.rooms;

  const calPrices = getAveragePrice({
    percents,
    roomPrices,
    date: getDateForm,
    option,
  });

  return loading ? (
    <Loading />
  ) : (
    <DetailPresenter
      onChange={onChange}
      backBtnShow={backBtnShow}
      onCancel={onCancel}
      y={y}
      second={second}
      className={className}
      fromDate={fromDate}
      toDate={toDate}
      prices={prices}
      days={days}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      onDisabledDayError={onDisabledDayError}
      carouselItem={carouselItem}
      hotelInfo={hotelInfo}
      onClick={onClick}
      getDateForm={getDateForm}
      option={option}
      calPrices={calPrices}
    />
  );
}

export default Detail;
