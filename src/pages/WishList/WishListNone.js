import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function WishListNone() {
  const history = useHistory();
  const GotoMain = () => {
    history.push(`/`);
  };

  return (
    <ListBox>
      <ReservationList>위시리스트에 상품이 없습니다.</ReservationList>
      <ReservationDesk>
        데일리호텔의 다양한 호텔을 구경해보세요.
      </ReservationDesk>
      <GoMainButton onClick={GotoMain}>상품 둘러보기</GoMainButton>
    </ListBox>
  );
}

export default WishListNone;

const ReservationList = styled.div`
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 10px;
`;

const ReservationDesk = styled.div`
  margin-bottom: 30px;
  color: gray;
`;

const GoMainButton = styled.button`
  padding: 15px 60px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #6e2c9b;
  font-size: 17px;
  cursor: pointer;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 220px;
`;
