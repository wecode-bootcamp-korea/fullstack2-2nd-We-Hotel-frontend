import { CalendarController } from '../Hooks/CalendarController/CalendarController';
import { ModalController } from '../Hooks/ModalController';
import { CALENDAR, MODAL } from './constants';

export const rootReducer = (state, { type }) => {
  switch (type) {
    case MODAL:
      const {
        onCancel,
        y,
        second,
        onClick,
        className,
        backBtnShow,
        setBackBtnShow,
      } = ModalController();

      return {
        onCancel,
        y,
        second,
        onClick,
        className,
        backBtnShow,
        setBackBtnShow,
      };

    case CALENDAR:
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

      return {
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
      };

    default:
      break;
  }
};
