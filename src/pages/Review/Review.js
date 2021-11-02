import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { _map } from '../../utils/function';
import { withRouter } from 'react-router-dom';
import ReviewHeader from './ReviewHeader';
import Satisfaction from './Satisfaction';
import ReviewTitle from './ReviewTitle';
import ReviewPicture from './ReviewPicture';
import ReviewFilter from './ReviewFilter';
import RoomFilter from './RoomFilter';
import ReviewList from './ReviewList';
import styled from 'styled-components';

const Review = () => {
  const [reviewItem, setReviewItem] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const selectRoomType = event => {
    const selectId = Number(event.target.id);

    const newFilterList = filterList.map(el => {
      if (el.id === selectId) {
        el.isSelect = !el.isSelect;
        return el;
      } else {
        return el;
      }
    });

    setFilterList(newFilterList);
  };

  useEffect(() => {
    const insertItem = { isSelect: false };
    const loadItem = async () => {
      try {
        let resReview = await axios.get('/review');
        const resRviewItem = resReview.data;
        const roomArray = _map(
          resRviewItem => resRviewItem.roomsName,
          resRviewItem
        );
        const insertArray = _map(
          resRviewItem => Object.assign(resRviewItem, insertItem),
          resRviewItem
        );
        const filteredRoomList = insertArray.filter((element, index) => {
          return roomArray.indexOf(element.roomsName) === index;
        });

        setReviewItem(resRviewItem);
        setFilterList(filteredRoomList);
      } catch (error) {
        console.log(error);
      }
    };

    loadItem();
  }, []);

  return (
    <ReviewContainer>
      <ReviewHeader />
      <Satisfaction reviewItem={reviewItem} />
      <ReviewTitle />
      <ReviewPicture reviewItem={reviewItem} />
      <ReviewFilter />
      <ReviewList reviewItem={reviewItem} />
      <RoomFilter filterList={filterList} selectRoomType={selectRoomType} />
    </ReviewContainer>
  );
};

export default Review;

const ReviewContainer = styled.div`
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  overflow: hidden;
`;
