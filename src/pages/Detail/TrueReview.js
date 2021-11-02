import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';

const TrueReview = props => {
  const [carouselItem, setCarouselItem] = useState([]);
  const { trueReview, _onClick } = props;

  useEffect(() => {
    const loadItem = async () => {
      try {
        let resReview = await axios.get('/review');
        setCarouselItem(resReview.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadItem();
  }, []);

  if (trueReview) {
    const reviewTotalCount = carouselItem.length;
    return (
      <TrueReviewContainer>
        <ReviewTitle>트루리뷰</ReviewTitle>
        <ReviewContentWrap>
          <Carousel type="review" carouselItem={carouselItem} />
        </ReviewContentWrap>
        <MoreReviewWrap>
          <Link to="/review">
            <MoreReview>{reviewTotalCount}개 리뷰 더보기</MoreReview>
          </Link>
        </MoreReviewWrap>
      </TrueReviewContainer>
    );
  } else {
    return;
  }
};

export default TrueReview;

TrueReview.defaultProps = {
  _onClick: () => {},
};

const TrueReviewContainer = styled.div`
  width: 760px;
  margin: 40px auto;
  padding: 30px 20px;
  border-top: 10px solid #f8f8f9;
  border-bottom: 1px solid #e7e7e7;
`;

const ReviewTitle = styled.h3`
  margin-bottom: 25px;
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: normal;
`;

const ReviewContentWrap = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  overflow: hidden;
  z-index: 1;
`;

const MoreReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0;
  height: 44px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  background-color: #fff;
  color: #db074a;
  cursor: pointer;
`;

const MoreReview = styled.p`
  color: #db074a;
  font-weight: 700;
`;
