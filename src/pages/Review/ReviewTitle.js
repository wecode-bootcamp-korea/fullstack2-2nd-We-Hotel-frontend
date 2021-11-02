import React from 'react';
import { DoubleQuotesL } from '@styled-icons/remix-editor/DoubleQuotesL';
import styled from 'styled-components';

const ReviewTitle = () => {
  return (
    <ReviewTitleContainer>
      <DoubleQuotesIcon />
      <Title>연인과 여행에 적합하여 강력 추천합니다.</Title>
    </ReviewTitleContainer>
  );
};

export default ReviewTitle;

const ReviewTitleContainer = styled.div`
  margin: 0 0 49px;
  text-align: center;
`;

const DoubleQuotesIcon = styled(DoubleQuotesL)`
  display: inline-block;
  width: 16px;
  height: 16px;
`;

const Title = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: #323232;
`;
