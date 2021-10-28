const getDateString = el => {
  const date = new Date(el);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  const dayInKorean = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayInKorean[date.getDay()];

  const dateString = year + '.' + month + '.' + day + '(' + dayOfWeek + ')';
  return dateString;
};

const getDays = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const difference = Math.abs(endDate - startDate);
  const days = difference / (1000 * 3600 * 24);

  return days;
};

export { getDateString, getDays };
