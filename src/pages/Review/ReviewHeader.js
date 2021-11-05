import React from 'react';
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const ReviewHeader = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <PrevIcon
        size="24"
        onClick={() => {
          window.location.replace('/detail/1');
        }}
      />
      <ReviewTitle>트루 리뷰</ReviewTitle>
    </HeaderContainer>
  );
};

export default ReviewHeader;

const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
`;

const PrevIcon = styled(ArrowLeft)`
  position: absolute;
  size: '20';
  left: 16px;
  top: 50%;
  margin-top: -12px;
`;

const ReviewTitle = styled.h1`
  font-size: 18px;
  color: #323232;
  text-align: center;
`;
