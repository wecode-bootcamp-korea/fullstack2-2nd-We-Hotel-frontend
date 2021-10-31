import React from 'react';
import { useHistory } from 'react-router';
import { History } from '@styled-icons/material-outlined/History';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { getFullDate } from '../utils';
import styled from 'styled-components';

function SearchedAccomodation({ data, setSearchedList }) {
  const history = useHistory();

  const searchedInfoClickHandler = (value, startDate, endDate) => {
    history.push(
      `/search/result?value=${value}&startDate=${startDate}&endDate=${endDate}`
    );
  };

  const deleteSearchedInfoHandler = value => {
    let searchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
    const filteredData = searchedInfo.filter(
      data => data.searchValue !== value
    );
    localStorage.setItem('searchedInfo', JSON.stringify(filteredData));
    const newSearchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
    setSearchedList(newSearchedInfo);
  };

  return (
    <Accomodation>
      <EachAccomodation
        onClick={() =>
          searchedInfoClickHandler(data.searchValue, data.startDay, data.endDay)
        }
      >
        <HistoryIcon />
        <SearchedInfo
          onClick={() =>
            searchedInfoClickHandler(
              data.searchValue,
              data.startDay,
              data.endDay
            )
          }
        >
          {data.searchValue}
        </SearchedInfo>
        <SearchedInfo>{getFullDate(data.startDay, data.endDay)}</SearchedInfo>
      </EachAccomodation>
      <DeleteIcon onClick={() => deleteSearchedInfoHandler(data.searchValue)} />
    </Accomodation>
  );
}

export default SearchedAccomodation;

const Accomodation = styled.li`
  position: relative;
  min-height: 58px;
  padding: 10px 20px 10px 40px;
  color: #4d4d4d;
  font-size: 14px;
`;

const SearchedInfo = styled.div`
  color: #888;
  font-size: 14px;
`;

const EachAccomodation = styled.div`
  cursor: pointer;
`;

const HistoryIcon = styled(History)`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  height: 20px;
  margin-top: -15px;
`;

const DeleteIcon = styled(CloseOutline)`
  position: absolute;
  top: 50%;
  right: -15px;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  padding: 15px;
  color: #888;
`;
