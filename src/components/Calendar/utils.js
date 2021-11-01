import { DAYS } from '../../utils/constants';

export const now = new Date();
export const curMilSecond = Number(now);
export const twoMonthMilSecond = 1000 * 60 * 60 * 24 * 60;
export const tempDate = i => new Date(curMilSecond + 1000 * 60 * 60 * 24 * i);

export const getDateForm = date => {
  const from = `${date.from?.year}-${date.from?.month}-${date.from?.day}`;
  const to = `${date.to?.year}-${date.to?.month}-${date.to?.day}`;
  const fromDay = DAYS[new Date(from).getDay()];
  const toDAay = DAYS[new Date(to).getDay()];

  if (toDAay) {
    return { from: `${from}-${fromDay}`, to: `${to}-${toDAay}` };
  } else {
    return { from: `${from}-${fromDay}` };
  }
};

export const getTodayNextDay = () => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const oneDayLater = tempDate(1);
  const tyear = oneDayLater.getFullYear();
  const tmonth = oneDayLater.getMonth() + 1;
  const tday = oneDayLater.getDate();

  return {
    from: { year, month, day },
    to: { year: tyear, month: tmonth, day: tday },
  };
};
