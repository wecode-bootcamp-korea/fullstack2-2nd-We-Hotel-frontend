import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Search } from '@styled-icons/boxicons-regular/Search';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import List from '../List/List';
import WishListNone from '../WishList/WishListNone';
import { getFullDate } from './utils';
import { API_ENDPOINT } from '../../api';
import axios from 'axios';
import styled from 'styled-components';

function SearchResult({ location }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { value, startDate, endDate } = query;

  useEffect(() => {
    const encodedValue = encodeURI(value);
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_ENDPOINT}/list/search?value=${encodedValue}&startDate=${startDate}&endDate=${endDate}`
        );
        setData(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <Header />
      <Result>
        <SearchBox>
          <SearchIcon />
          <SearchedValue>{value}</SearchedValue>
          <SearchedTerm>{getFullDate(startDate, endDate)}</SearchedTerm>
        </SearchBox>
        <SearchCount>
          <Count>결과 {data.length}건</Count>
        </SearchCount>
        {data.length > 0 ? (
          <List data={data} />
        ) : (
          <WishListNone page={'요청하신'} />
        )}
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
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -8px;
  width: 18px;
  height: 18px;
`;

const SearchedTerm = styled.p`
  font-size: 11px;
  color: #888;
`;

const SearchedValue = styled.span`
  font-size: 12px;
  line-height: 1.17;
  color: #323232;
`;

const SearchCount = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 16px 16px 6px;
  background-color: #f8f8f9;
`;

const Count = styled.h4`
  font-size: 13px;
  color: #666;
`;
