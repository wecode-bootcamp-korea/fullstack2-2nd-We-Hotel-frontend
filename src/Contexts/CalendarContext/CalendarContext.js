import { createContext, useReducer } from 'react';
import { useContext } from 'react/cjs/react.development';
import { modalReducer } from './CalenderReducer';

const CalendarContextInstance = createContext();

const days = [];
const CalendarContext = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    selectedDay: {},
    prices: {},
  });

  for (let i = 0; i <= 60; i++) {
    const curDate = new Date(Number(new Date()) + 1000 * 60 * 60 * 24 * i);
    if (curDate.getDay() === 6) {
      days.push({
        year: curDate.getFullYear(),
        month: curDate.getMonth() + 1,
        day: curDate.getDate(),
        className: 'blue',
      });
    }
  }

  return (
    <CalendarContextInstance.Provider value={{ state, dispatch }}>
      {children}
    </CalendarContextInstance.Provider>
  );
};

export default CalendarContext;

export const useCalendarDispatch = () => {
  const { state, dispatch } = useContext(CalendarContextInstance);
  return [state, dispatch];
};
