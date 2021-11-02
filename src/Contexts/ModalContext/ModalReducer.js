import { TOGGLEMODAL, TOGGLEXBTN } from '../constants';
import _ from 'lodash';

export const modalReducer = (state, { id, type }) => {
  if (!id) return state;
  const newObj = _.cloneDeep(state);
  switch (type) {
    case TOGGLEMODAL:
      newObj[id].isShow = !state[id].isShow;
      return newObj;

    case TOGGLEXBTN:
      newObj[id].backBtnShow = !state[id].backBtnShow;
      return newObj;

    default:
      break;
  }
};
