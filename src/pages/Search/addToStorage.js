export const addToStorage = (searchValue, date) => {
  let searchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
  if (!searchedInfo) {
    searchedInfo = [];
    searchedInfo.unshift({
      searchValue: searchValue,
      date: date,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(searchedInfo));
  } else if (searchedInfo?.length > 10) {
    searchedInfo.pop();
    const filteredProduct = searchedInfo.filter(
      item => item.searchValue !== searchValue
    );
    filteredProduct.unshift({
      searchValue: searchValue,
      date: date,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(filteredProduct));
  } else {
    const filteredInfo = searchedInfo.filter(
      item => item.searchValue !== searchValue
    );
    filteredInfo.unshift({
      searchValue: searchValue,
      date: date,
    });
    localStorage.setItem('searchedInfo', JSON.stringify(filteredInfo));
  }
};
