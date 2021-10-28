import React from 'react';
import qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import styled from 'styled-components';

function SearchResult({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <Header />
      <Result>
        <SearchBox className="box">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <span>{query.value}</span>
          <p>{query.date}</p>
        </SearchBox>
        <SearchCount>
          <h4>결과 0건</h4>
        </SearchCount>
        {/* 리스트페이지에 검색어 전달, query는 encode 필요*/}
      </Result>
    </>
  );
}

export default SearchResult;

const Result = styled.div`
  max-width: 768px;
  margin: 15px auto;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 40px;
  margin: 8px 12px;
  padding: 0 10px 0 34px;
  border-radius: 3px;
  background-color: #f8f8f9;
  font-size: 14px;

  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -8px;
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 12px;
    line-height: 1.17;
    color: #323232;
  }

  p {
    font-size: 11px;
    color: #888;
  }
`;

const SearchCount = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 16px 16px 6px;
  background-color: #f8f8f9;

  h4 {
    font-size: 13px;
    color: #666;
  }
`;
