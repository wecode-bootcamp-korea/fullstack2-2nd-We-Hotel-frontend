import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  curMilSecond,
  getDateForm,
  getTodayNextDay,
  now,
  tempDate,
  twoMonthMilSecond,
} from './utils';
import { ROUTES } from '../../utils/constants';

export const CalendarController = props => {
  const tempDays = [];
  const [days, setDays] = useState([]);
  const [prices, setPrices] = useState({});
  const [selectedDay, setSelectedDay] = useState({
    from: { day: 1, month: 11, year: 2021 },
    to: { day: 5, month: 11, year: 2021 },
  });

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

  useEffect(() => {
    setSelectedDay(getTodayNextDay());

    const tempArr = [];
    for (let i = 0; i <= 60; i++) {
      const curDate = new Date(Number(new Date()) + 1000 * 60 * 60 * 24 * i);
      if (curDate.getDay() === 6) {
        tempArr.push({
          year: curDate.getFullYear(),
          month: curDate.getMonth() + 1,
          day: curDate.getDate(),
          className: 'blue',
        });
      }
      setDays(tempArr);
    }
  }, []);

  useEffect(() => {
    const getPrice = async () => {
      try {
        const data = await axios.get(ROUTES.GET_OPTION_PRICE);
        setPrices(data.data.prices);
        switch (Boolean(props)) {
          case true:
            const dayMapper = {
              5: curDate => dayMapperFunc(`friday`, curDate),
              6: curDate => dayMapperFunc(`saturday blue`, curDate),
              common: curDate => dayMapperFunc(`commonDay`, curDate),
            };

            function dayMapperFunc(className, curDate) {
              tempDays.push({
                year: curDate.getFullYear(),
                month: curDate.getMonth() + 1,
                day: curDate.getDate(),
                className,
              });
            }

            for (let i = 0; i <= 60; i++) {
              const curDate = tempDate(i);
              const curDayIndex = curDate.getDay();
              if (5 === curDayIndex || 6 === curDayIndex) {
                dayMapper[curDayIndex](curDate);
              } else {
                dayMapper['common'](curDate);
              }
            }
            setDays(tempDays);
            break;

          default:
            break;
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPrice();
  }, []);

  const minimumDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };

  const maximumDate = {
    year: new Date(curMilSecond + twoMonthMilSecond).getFullYear(),
    month: new Date(curMilSecond + twoMonthMilSecond).getMonth() + 1,
    day: new Date(curMilSecond + twoMonthMilSecond).getDate(),
  };

  const onDisabledDayError = () => alert('선택 할 수 없는 날짜입니다.');

  return {
    getDateForm: getDateForm(selectedDay),
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
    fromDate,
    toDate,
  };
};
