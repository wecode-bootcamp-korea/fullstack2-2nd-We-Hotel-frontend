import { useCallback, useEffect, useState } from 'react';
import { curMilSecond, now, tempDate, twoMonthMilSecond } from './utils';
import CalendarPresenter from './CalendarPresenter';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import { CLOSE, SETDATE } from '../../Contexts/constants';
import { useCalendarDispatch } from '../../Contexts/CalendarContext/CalendarContext';
import { getTodayNextDay } from '../../Hooks/CalendarController/utils';

export const CalendarContainer = ({ priceShow = false }) => {
  const tempDays = [];
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(getTodayNextDay());
  const [{ prices }, calendarDispatch] = useCalendarDispatch();
  const [_, modalDispatch] = useModalDispatch();

  useEffect(() => {
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

  const stableDispatch = useCallback(calendarDispatch, []);

  useEffect(() => {
    stableDispatch({ type: SETDATE, selectedDay });
  }, [stableDispatch, selectedDay]);

  useEffect(() => {
    const getPrice = async () => {
      switch (priceShow) {
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
    };

    getPrice();
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

  return (
    <CalendarPresenter
      fromDate={fromDate}
      toDate={toDate}
      onCancel={() => modalDispatch({ type: CLOSE })}
      prices={prices}
      days={days}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
    />
  );
};
