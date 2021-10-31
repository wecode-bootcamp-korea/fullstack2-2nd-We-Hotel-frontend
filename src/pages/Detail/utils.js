import { DAYS } from '../../utils/constants';
import { OPTIONS } from './constants';

export const getMonthDay = date =>
  `${date.getMonth() + 1}.${date.getDate()}(${DAYS[date.getDay()]})`;

export const getFromNowDate = (day = 1) => {
  const tempDate = new Date(Number(new Date()) + 60 * 1000 * 60 * 24 * day);
  return `${tempDate.getMonth()}.${tempDate.getDate()}(${
    DAYS[tempDate.getDay()]
  })`;
};

export const aGettDistance = ({ from, to }) => {
  if (Number(to) - Number(from) < 0) {
    const tempF = from;
    from = to;
    to = tempF;
  }

  const t = new Date(to.setHours(0, 0, 0, 0));
  const f = new Date(from.setHours(0, 0, 0, 0));

  return (t - f) / (1000 * 60 * 60 * 24);
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
    (Number(new Date(to).setHours(0, 0, 0, 0)) -
      Number(new Date(from).setHours(0, 0, 0, 0))) /
    (1000 * 60 * 60 * 24)
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

const matchDay = {
  0: 'commonDay',
  1: 'commonDay',
  2: 'commonDay',
  3: 'commonDay',
  4: 'commonDay',
  5: 'friday',
  6: 'saturday',
};

export const getAveragePrice = ({
  percents,
  roomPrices,
  date: { from, to },
  option,
}) => {
  if (!percents || !roomPrices || !from || !to) return;

  const f = from.split('-').slice(0, 3).join('-');
  const t = to.split('-').slice(0, 3).join('-');
  const a = getDistanceDate({ from: f, to: t });
  const calPrices = {};
  if (a === 1) {
    const key = matchDay[new Date(f).getDay()];
    const percent = percents[key];

    for (let room of roomPrices) {
      calPrices[room.id] = Math.round((percent * room.price) / 100) * 100;
    }
    return calPrices;
  }

  for (let i = 0; i <= a; i++) {
    let start = new Date(new Date(f).setHours(0, 0, 0, 0));

    const key = matchDay[start.getDay()];
    const percent = percents[key];

    for (let room of roomPrices) {
      calPrices[room.id] = !calPrices[room.id]
        ? Math.round((percent * room.price) / 100) * 100
        : (calPrices[room.id] +=
            Math.round((percent * room.price) / 100) * 100);
    }

    start = new Date(
      new Date(Number(start) + 1000 * 60 * 60 * 24).setHours(0, 0, 0, 0)
    );
  }

  if (option === OPTIONS.ONEDAY) {
    for (let key in calPrices) {
      calPrices[key] = Math.round(calPrices[key] / a / 100) * 100;
    }
  }
  return calPrices;
};
