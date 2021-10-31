import { aGettDistance } from '../Detail/utils';

export const searchTags = [
  '원구호텔',
  '정훈호텔',
  '기철호텔',
  '정호호텔',
  '다빈호텔',
  '창현호텔',
];

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

const addToStorage = (searchValue, startDay, endDay) => {
  let searchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
  if (!searchedInfo) {
    searchedInfo = [];
    searchedInfo.unshift({
      searchValue: searchValue,
      startDay: startDay,
      endDay: endDay,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(searchedInfo));
  } else if (searchedInfo?.length > 10) {
    searchedInfo.pop();
    const filteredProduct = searchedInfo.filter(
      item => item.searchValue !== searchValue
    );
    filteredProduct.unshift({
      searchValue: searchValue,
      startDay: startDay,
      endDay: endDay,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(filteredProduct));
  } else {
    const filteredInfo = searchedInfo.filter(
      item => item.searchValue !== searchValue
    );
    filteredInfo.unshift({
      searchValue: searchValue,
      startDay: startDay,
      endDay: endDay,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(filteredInfo));
  }
};

const getFullDate = (startDate, endDate) => {
  return (
    getDateString(startDate) +
    ' - ' +
    getDateString(endDate) +
    ', ' +
    aGettDistance({ from: new Date(startDate), to: new Date(endDate) }) +
    '박'
  );
};

export { getDateString, addToStorage, getFullDate };
