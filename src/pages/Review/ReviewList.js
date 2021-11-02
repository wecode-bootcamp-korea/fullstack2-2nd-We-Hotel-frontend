import React from 'react';
import styled from 'styled-components';

const ReviewList = props => {
  const { reviewItem } = props;

  return (
    <ReviewListContainer>
      <TotalReviewWrap>
        <TotalReviewCount>{reviewItem.length}</TotalReviewCount>
        개의 리뷰
      </TotalReviewWrap>
      <ContentWrap>
        <ContentBox>
          {reviewItem.map(
            ({
              id,
              score,
              review_content,
              nickName,
              roomsName,
              url,
              create_at,
            }) => {
              return (
                <ContentWrap key={id}>
                  <ContentHeaderWrap>
                    <HeaderLeft>
                      <HeaderText>최고</HeaderText>
                      <HeaderRate>{score}</HeaderRate>
                      <HeaderBanner>대표리뷰</HeaderBanner>
                    </HeaderLeft>
                    <HeaderRight>
                      <SupportReview>도움됐어요</SupportReview>
                      <SupportReviewCount>0</SupportReviewCount>
                    </HeaderRight>
                  </ContentHeaderWrap>
                  <UsedRoomType>{roomsName}</UsedRoomType>
                  <ReviewWrap>
                    <Review>{review_content}</Review>
                  </ReviewWrap>
                </ContentWrap>
              );
            }
          )}
        </ContentBox>
      </ContentWrap>
    </ReviewListContainer>
  );
};

export default ReviewList;

const ReviewListContainer = styled.div`
  width: 100%;
`;

const TotalReviewWrap = styled.div`
  margin: 20px 0 16px;
  color: #4d4d4d;
  font-size: 14px;
  line-height: 20px;
`;

const TotalReviewCount = styled.strong`
  font-weight: 700;
`;

const ContentWrap = styled.ul`
  list-style: none;
`;

const ContentBox = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const ContentHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeft = styled.p`
  margin: 0;
`;

const HeaderText = styled.h1`
  display: inline-block;
  margin-right: 4px;
  line-height: 18px;
  color: #323232;
  font-size: 16px;
  font-weight: 700;
`;

const HeaderRate = styled.span`
  display: inline-block;
  margin-right: 4px;
  color: #13aab8;
  font-size: 16px;
  line-height: 18px;
`;

const HeaderBanner = styled.span`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  box-sizing: border-box;
  vertical-align: 1px;
  color: #0093a1;
  background: #e6f8fa;
  font-weight: 500;
  font-size: 11px;
`;

const HeaderRight = styled.p`
  display: inline-block;
  flex-direction: row;
  margin: 0;
`;

const SupportReview = styled.span`
  display: inline-block;
  margin-right: 5px;
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 500;
`;

const SupportReviewCount = styled.span`
  display: inline-block;
  color: #13aab8;
  font-size: 12px;
  line-height: 14px;
`;

const UsedRoomType = styled.h3`
  display: block;
  margin-top: 12px;
  line-height: 18px;
  color: #888;
  font-size: 12px;
`;

const ReviewWrap = styled.div`
  position: relative;
  height: 156px;
  margin-top: 16px;
`;

const Review = styled.p`
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  overflow-wrap: break-word;
  word-break: break-all;
  word-wrap: break-word;
`;

const MoreReview = styled.button`
  position: absolute;
  display: block;
  right: 0;
  bottom: 5px;
  margin-top: 4px;
  border: none;
  text-align: center;
  color: #db074a;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const NextReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
