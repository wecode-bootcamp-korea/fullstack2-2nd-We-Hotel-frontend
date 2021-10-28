import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import { searchTags } from './searchTags';
import { addToStorage } from './addToStorage';
import { getDateString, getDays } from './getDateInfo';
import styled from 'styled-components';

function Search() {
  const history = useHistory();

  const [term, setTerm] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedInfo, setSearchedInfo] = useState([]);

  useEffect(() => {
    const searchedData = JSON.parse(localStorage.getItem('searchedInfo'));
    setSearchedInfo(searchedData);
  }, []);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date().setDate(new Date().getDate() + 1);
    const todayString = getDateString(today);
    const tomorrowString = getDateString(tomorrow);
    const days = getDays(today, tomorrow);

    setTerm(todayString + ' - ' + tomorrowString + ', ' + days + '박');
  }, []);

  const inputHandler = e => {
    setSearchValue(e.target.value);
  };

  const dateBoxClickHandler = () => {
    history.push(`/search?value=${searchValue}&date=${term}`);
  };

  const searchBtnHandler = () => {
    if (searchValue.length > 0) {
      addToStorage(searchValue, term);
      history.push(`/search/result?value=${searchValue}&date=${term}`);
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  const searchedInfoClickHandler = (value, term) => {
    history.push(`/search/result?value=${value}&date=${term}`);
  };

  const deleteSearchedInfoHandler = value => {
    let searchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
    const filteredData = searchedInfo.filter(
      data => data.searchValue !== value
    );
    localStorage.setItem('searchedInfo', JSON.stringify(filteredData));
    const newSearchedInfo = JSON.parse(localStorage.getItem('searchedInfo'));
    setSearchedInfo(newSearchedInfo);
  };

  return (
    <>
      <Header page="검색" />
      <SearchWrapper>
        <SearchBox className="box">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            placeholder="국내스테이명 또는 지역명 입력"
            onChange={inputHandler}
          />
        </SearchBox>
        <DateBox className="box" onClick={dateBoxClickHandler}>
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          <span>{term}</span>
        </DateBox>
        <Button>
          <button type="submit" onClick={searchBtnHandler}>
            검색하기
          </button>
        </Button>
      </SearchWrapper>
      <SearchInfo>
        <div>
          <h3>최근 검색 결과</h3>
          <ul className="history">
            {searchedInfo &&
              searchedInfo.map((data, id) => {
                return (
                  <li key={id}>
                    <div
                      onClick={() =>
                        searchedInfoClickHandler(data.searchValue, data.date)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faHistory}
                        className="historyIcon"
                      />
                      <p
                        onClick={() =>
                          searchedInfoClickHandler(data.searchValue, data.date)
                        }
                      >
                        {data.searchValue}
                      </p>
                      <p>{data.date}</p>
                    </div>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="deleteIcon"
                      onClick={() =>
                        deleteSearchedInfoHandler(data.searchValue)
                      }
                    />
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <h3>위호텔 인기검색 태그</h3>
          <ul className="searchTags">
            {searchTags.map((tag, id) => {
              return <li key={id}>#&nbsp;{tag}</li>;
            })}
          </ul>
        </div>
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

  .box {
    position: relative;
    height: 40px;
    margin-bottom: 10px;
    padding: 11px 10px 0 34px;
    border-radius: 3px;
    background-color: #f8f8f9;
    font-size: 14px;

    .icon {
      position: absolute;
      top: 50%;
      left: 10px;
      margin-top: -8px;
    }
  }
`;

const SearchBox = styled.div`
  width: 100%;

  input {
    display: block;
    font-size: 14px;
    color: #4d4d4d;
    border: none;
    outline: none;
    background: none;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const DateBox = styled.div`
  span {
    font-size: 14px;
    line-height: 18px;
    color: #4d4d4d;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Button = styled.div`
  padding-bottom: 10px;

  button {
    width: 100%;
    margin: 0;
    padding: 12px 22px;
    color: #fff;
    border-radius: 3px;
    background-color: #6e2c9b;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }
`;

const SearchInfo = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 0;

  h3 {
    padding: 11px 20px;
    color: #c5c5c5;
    line-height: 1.07;
    font-size: 14px;
  }

  .history {
    margin-bottom: 20px;
    padding: 0 20px;

    li {
      position: relative;
      min-height: 58px;
      padding: 10px 20px 10px 40px;
      color: #4d4d4d;
      font-size: 14px;

      div {
        cursor: pointer;
      }

      .historyIcon {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -15px;
        width: 18px;
        height: 18px;
      }

      p {
        font-size: 14px;
        color: #888;
      }

      .deleteIcon {
        position: absolute;
        top: 50%;
        right: -15px;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        padding: 15px;
        color: #888;
      }
    }
  }

  .searchTags {
    padding: 0 16px 10px;
    margin-bottom: 20px;

    li {
      display: inline-block;
      margin: 0 10px 10px 0;
      padding: 4px 12px;
      border-radius: 50px;
      border: 1px solid #e7e7e7;
      font-size: 14px;
      color: #666;
    }
  }
`;
