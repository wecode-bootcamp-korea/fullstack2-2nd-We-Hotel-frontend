import React, { useEffect } from 'react';
import Uprasing from '../../../components/Modals/SearchModal';
import CalendarPresenter from '../../../components/Calendar/SearchCalendar';
import { CalendarController } from '../../../Hooks/CalendarController/CalendarController';

function SearchCalendar({
  y,
  second,
  onClick,
  onCancel,
  className,
  setSearchTerm,
  searchTerm,
}) {
  const {
    prices,
    days,
    maximumDate,
    minimumDate,
    selectedDay,
    setSelectedDay,
    onDisabledDayError,
    toDate,
    fromDate,
  } = CalendarController();

  useEffect(() => {
    const { from, to } = selectedDay;
    if (from && to) {
      const startDay = from.year + '-' + from.month + '-' + from.day;
      const endDay = to.year + '-' + to.month + '-' + to.day;
      setSearchTerm({
        ...searchTerm,
        startDay: startDay,
        endDay: endDay,
      });
    }
  }, [selectedDay]);

  return (
    <Uprasing
      onCancel={onCancel}
      y={y}
      onClick={onClick}
      second={second}
      className={className}
    >
      <CalendarPresenter
        prices={prices}
        days={days}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        onDisabledDayError={onDisabledDayError}
        fromDate={fromDate}
        toDate={toDate}
        onCancel={onCancel}
      />
    </Uprasing>
  );
}

export default SearchCalendar;
