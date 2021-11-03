import React from 'react';
import styled from 'styled-components';

function ReservationListNone() {
  return (
    <ListBox>
      <ReservationList>예약/구매내역이 없습니다.</ReservationList>
      <ReservationDesk>
        데일리호텔의 다양한 상품을 예약해보세요.
      </ReservationDesk>
      <GoMainButton>상품 둘러보기</GoMainButton>
    </ListBox>
  );
}

export default ReservationListNone;

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
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 220px;
`;
