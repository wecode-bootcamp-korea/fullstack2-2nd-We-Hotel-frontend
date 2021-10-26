const days = ['일', '월', '화', '수', '목', '금', '토'];
export const now = new Date();
export const curMilSecond = Number(now);
export const twoMonthMilSecond = 1000 * 60 * 60 * 24 * 60;
export const tempDate = i => new Date(curMilSecond + 1000 * 60 * 60 * 24 * i);

export const getDateForm = date => {
  const from = `${date.from?.year}-${date.from?.month}-${date.from?.day}`;
  const to = `${date.to?.year}-${date.to?.month}-${date.to?.day}`;
  const fromDay = days[new Date(from).getDay()];
  const toDAay = days[new Date(to).getDay()];

  if (toDAay) {
    return { from: `${from}-${fromDay}`, to: `${to}-${toDAay}` };
  } else {
    return { from: `${from}-${fromDay}` };
  }
};
