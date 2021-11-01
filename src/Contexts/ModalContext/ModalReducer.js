import { CLOSE, SHOW, DISABLEXBTN } from '../constants';

export const modalReducer = (state, { type, backBtnShow = false }) => {
  switch (type) {
    case SHOW:
      return {
        backBtnShow,
        y: 0,
        second: 0.2,
        className: SHOW,
      };

    case CLOSE:
      return {
        backBtnShow: state.backBtnShow,
        y: 1500,
        second: 0,
        className: CLOSE,
      };

    case DISABLEXBTN:
      return {
        backBtnShow: state.backBtnShow,
        y: state.y,
        second: state.second,
        className: CLOSE,
      };
    default:
      break;
  }
};
