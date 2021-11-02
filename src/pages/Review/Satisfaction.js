import React from 'react';
import { ThumbUp } from '@styled-icons/heroicons-solid/ThumbUp';
import { KissWinkHeart } from '@styled-icons/fa-solid/KissWinkHeart';
import styled from 'styled-components';

const Satisfaction = props => {
  const { reviewItem } = props;

  const _map = (callback, iter) => {
    let response = [];
    for (const a of iter) {
      response.push(callback(a));
    }
    return response;
  };

  let scoreArray = _map(reviewItem => reviewItem.score, reviewItem);
  let totalScore = 0;

  for (const score of scoreArray) {
    totalScore = totalScore + score;
  }

  const scoreAvg = totalScore / reviewItem.length;

  return (
    <SatisfactionContainer>
      <SatisfactionWrap>
        <ThumbUpIcon />
        <Score>95%</Score>
        <ScoreTextWrap>
          <TotalPerson>{reviewItem.length}</TotalPerson>
          명이 평가했습니다.
        </ScoreTextWrap>
      </SatisfactionWrap>
      <TrueReviewWrap>
        <TrueReviewTitleWrap>
          <TrueReviewTitle>트루리뷰</TrueReviewTitle>
          <TotalReview>전체 {reviewItem.length}개</TotalReview>
        </TrueReviewTitleWrap>
        <ReviewRateWrap>
          <ReviewRateImg />
          <ReviewRateTextWrap>
            <ReviewRate>{scoreAvg}</ReviewRate>
          </ReviewRateTextWrap>
        </ReviewRateWrap>
      </TrueReviewWrap>
    </SatisfactionContainer>
  );
};

export default Satisfaction;

const SatisfactionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  padding: 24px 0;
`;

const SatisfactionWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 24px;
`;

const ThumbUpIcon = styled(ThumbUp)`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 5px 0 0;
  padding-bottom: 4px;
  color: #13aab8;
`;

const Score = styled.span`
  color: #323232;
  font-size: 32px;
  line-height: 1.44;
  display: inline-block;
  font-weight: 700;
  margin-right: 4px;
`;

const ScoreTextWrap = styled.p`
  display: inline-block;
  padding-top: 10px;
  color: #888;
  line-height: 16px;
  font-size: 14px;
  word-spacing: 1px;
  letter-spacing: 1px;
`;

const TotalPerson = styled.span`
  color: #13aab8;
`;

const TrueReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const TrueReviewTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TrueReviewTitle = styled.h2`
  color: #4d4d4d;
  line-height: 24px;
  font-size: 18px;
  font-weight: 700;
`;

const TotalReview = styled.h3`
  color: #888;
  line-height: 16px;
  font-size: 14px;
  font-weight: 400;
`;

const ReviewRateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
`;

const ReviewRateImg = styled(KissWinkHeart)`
  display: inline-block;
  width: 32px;
  height: 32px;
  color: #13aab8;
`;

const ReviewRateTextWrap = styled.div`
  text-align: center;
`;

const ReviewRate = styled.p`
  display: inline-block;
  margin-left: 2px;
  color: #13aab8;
  line-height: 16px;
  font-size: 14px;
  font-weight: 400;
`;
