import React, { useEffect } from 'react';
import { ROUTES } from '../../utils/constants';
import { useState } from 'react/cjs/react.development';
import { getAveragePrice } from './utils';
import { getDataAllPromise } from '../../utils/commonUtils';
import Loading from '../../components/Loading/Loading';
import { detailModalId, OPTIONS } from './constants';
import DetailPresenter from './DetailPresenter';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import { TOGGLEXBTN, TOGGLEMODAL } from '../../Contexts/constants';
import { useCalendarDispatch } from '../../Contexts/CalendarContext/CalendarContext';
import { getDateForm } from '../../Hooks/CalendarController/utils';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [carouselItem, setCarouselItem] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [option, setOption] = useState(OPTIONS[0].e);
  const [modalState, modalDispatch] = useModalDispatch();
  const [{ prices, selectedDay }, calendarDispatch] = useCalendarDispatch();

  useEffect(() => {
    getDataAllPromise({
      args: [
        { setFunc: setCarouselItem, url: ROUTES.DETAIL_CAROCEL },
        { setFunc: setHotelInfo, url: ROUTES.DETAIL_INFO },
        {
          setFunc: calendarDispatch,
          url: ROUTES.GET_OPTION_PRICE,
        },
      ],
      setLoading,
    });

    modalDispatch({ type: TOGGLEXBTN, id: detailModalId });
  }, []);

  const fromDate =
    selectedDay.from &&
    new Date(
      `${selectedDay.from.year}-${selectedDay.from.month}-${selectedDay.from.day}`
    );

  const toDate =
    selectedDay.to &&
    new Date(
      `${selectedDay.to.year}-${selectedDay.to.month}-${selectedDay.to.day}`
    );

  const roomPrices = hotelInfo[0]?.rooms;

  const calPrices = getAveragePrice({
    percents: prices,
    roomPrices,
    date: getDateForm(selectedDay),
    option,
  });

  const onChange = e => {
    setOption(e.target.id);
  };

  const onClick = () => {
    window.scrollTo(0, 0);
    modalDispatch({ type: TOGGLEMODAL, id: detailModalId });
  };

  return loading ? (
    <Loading />
  ) : (
    <DetailPresenter
      funcs={{ onChange, onClick }}
      dates={{ fromDate, toDate }}
      states={{
        carouselItem,
        hotelInfo,
        isShow: modalState[detailModalId].isShow,
        option,
        calPrices,
      }}
      getDateForm={getDateForm(selectedDay)}
    />
  );
}

export default Detail;
