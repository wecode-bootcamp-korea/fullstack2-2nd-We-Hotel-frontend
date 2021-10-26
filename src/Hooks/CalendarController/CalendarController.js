import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  curMilSecond,
  getDateForm,
  now,
  tempDate,
  twoMonthMilSecond,
} from './utils';
import { ROUTES } from '../../utils/constants';

export const CalendarController = props => {
  const tempDays = [];
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState({ from: null, to: null });
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const getPrice = async () => {
      try {
        const data = await axios.get(ROUTES.GET_OPTION_PRICE);
        setPrices(data.data.prices);
        switch (Boolean(props)) {
          case true:
            const dayMapper = {
              5: curDate => dayMapperFunc(`friday`, curDate),
              6: curDate => dayMapperFunc(`saturday`, curDate),
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

  const onDisabledDayError = () => alert('이미 지난 날짜입니다.');

  return {
    getDateForm: getDateForm(selectedDay),
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
  };
};
