import { GETPRICE, SETDATE, SETDAYS } from '../constants';

export const modalReducer = (state, { type, prices, selectedDay }) => {
  switch (type) {
    case SETDAYS:
      return {
        prices: state.prices,
        selectedDay: state.selectedDay,
      };
    case SETDATE:
      return {
        prices: state.prices,
        selectedDay,
      };
    case GETPRICE:
      return {
        prices,
        selectedDay: state.selectedDay,
      };

    default:
      break;
  }
};
