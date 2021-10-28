import { DAYS } from '../../utils/constants';

export const getMonthDay = date =>
  `${date.getMonth()}.${date.getDate()}(${DAYS[date.getDay()]})`;

export const getFromNowDate = (day = 1) => {
  const tempDate = new Date(Number(new Date()) + 60 * 1000 * 60 * 24 * day);
  return `${tempDate.getMonth()}.${tempDate.getDate()}(${
    DAYS[tempDate.getDay()]
  })`;
};

export const getDistanceDate = ({ from, to }) => {
  const tempFrom = from.split('-');
  const tempTo = to?.split('-');

  if (tempFrom.length === 4) {
    tempFrom.pop();
    from = tempFrom.join('-');
  }

  if (tempTo && tempTo.length === 4) {
    tempTo.pop();
    to = tempTo.join('-');
  }

  return (
    (Number(new Date(to)) - Number(new Date(from))) / (1000 * 60 * 60 * 24)
  );
};

export const setCurPickDate = ({ setFun, getDateForm }) => {
  const fromTemp = getDateForm.from?.split('-');
  const toTemp = getDateForm.to?.split('-');

  if (!fromTemp || !toTemp) return;

  setFun({
    from: `${fromTemp[1]}.${fromTemp[2]}(${fromTemp[3]})`,
    to: `${toTemp[1]}.${toTemp[2]}(${toTemp[3]})`,
  });
};
