import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Search as SearchI } from '@styled-icons/boxicons-regular/Search';
import { Calendar4 } from '@styled-icons/bootstrap/Calendar4';
import moment from 'moment';
import Header from '../../components/Header/Header';
import SearchCalendar from './Components/SearchCalendar';
import SearchedAccomodation from './Components/SearchedAccomodation';
import { ModalController } from '../../Hooks/ModalController';
import { searchTags, addToStorage, getFullDate } from './utils';
import styled from 'styled-components';

function Search() {
  const {
    y,
    second,
    onClick,
    onCancel,
    className,
    backBtnShow,
    setBackBtnShow,
  } = ModalController();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState({
    startDay: '',
    endDay: '',
  });
  const [searchValue, setSearchValue] = useState('');
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    const searchedData = JSON.parse(localStorage.getItem('searchedInfo'));
    setSearchedList(searchedData);
  }, []);

  useEffect(() => {
    setSearchTerm({
      startDay: moment().format('YYYY-MM-DD'),
      endDay: moment().add(1, 'days').format('YYYY-MM-DD'),
    });
  }, []);

  const inputHandler = e => {
    setSearchValue(e.target.value);
  };

  const searchBtnHandler = () => {
    if (searchValue.length > 0) {
      addToStorage(searchValue, searchTerm.startDay, searchTerm.endDay);
      history.push(
        `/search/result?value=${searchValue}&startDate=${searchTerm.startDay}&endDate=${searchTerm.endDay}`
      );
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <SearchCalendar
        onCancel={onCancel}
        y={y}
        onClick={onClick}
        second={second}
        className={className}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        backBtnShow={backBtnShow}
        setBackBtnShow={setBackBtnShow}
      />
      <Header page="검색" />
      <SearchWrapper>
        <SearchBox>
          <SearchIcon />
          <SearchInput
            placeholder="국내스테이명 또는 지역명 입력"
            onChange={inputHandler}
          />
        </SearchBox>
        <SearchBox onClick={() => onClick('show')}>
          <CalendarIcon />
          <SearchTerm>
            {getFullDate(searchTerm.startDay, searchTerm.endDay)}
          </SearchTerm>
        </SearchBox>
        <SearchButton type="submit" onClick={searchBtnHandler}>
          검색하기
        </SearchButton>
      </SearchWrapper>
      <SearchInfo>
        <SearchInfoTitle>최근 검색 결과</SearchInfoTitle>
        <SearchHistory>
          {searchedList &&
            searchedList.map((data, id) => {
              return (
                <SearchedAccomodation
                  key={id}
                  data={data}
                  setSearchedList={setSearchedList}
                />
              );
            })}
        </SearchHistory>
        <SearchInfoTitle>위호텔 인기검색 태그</SearchInfoTitle>
        <SearchTags>
          {searchTags.map((tag, id) => {
            return <SearchTagList key={id}>#&nbsp;{tag}</SearchTagList>;
          })}
        </SearchTags>
      </SearchInfo>
    </>
  );
}

export default Search;

const SearchWrapper = styled.div`
  max-width: 768px;
  margin: 15px auto;
  padding: 10px 20px 20px;
  background-color: #fff;
  border-bottom: 3px solid rgb(240, 240, 240);
`;

const SearchIcon = styled(SearchI)`
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -8px;
  width: 18px;
  height: 18px;
`;

const CalendarIcon = styled(Calendar4)`
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -8px;
  width: 15px;
  height: 15px;
`;

const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 11px 10px 0 34px;
  border-radius: 3px;
  background-color: #f8f8f9;
  font-size: 14px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  display: block;
  font-size: 14px;
  color: #4d4d4d;
  border: none;
  outline: none;
  background: none;
  overflow: hidden;
  white-space: nowrap;
`;

const SearchTerm = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #4d4d4d;
  overflow: hidden;
  white-space: nowrap;
`;

const SearchButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 12px 22px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 3px;
  background-color: #6e2c9b;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

const SearchInfo = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 0;
`;

const SearchHistory = styled.ul`
  margin-bottom: 20px;
  padding: 0 20px;
`;

const SearchTags = styled.ul`
  padding: 0 16px 10px;
  margin-bottom: 20px;
`;

const SearchTagList = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 4px 12px;
  border-radius: 50px;
  border: 1px solid #e7e7e7;
  font-size: 14px;
  color: #666;
`;

const SearchInfoTitle = styled.h3`
  padding: 11px 20px;
  color: #c5c5c5;
  line-height: 1.07;
  font-size: 14px;
`;
