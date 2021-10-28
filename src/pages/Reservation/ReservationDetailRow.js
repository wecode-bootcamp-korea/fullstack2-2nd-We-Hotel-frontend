import React from 'react';
import styled from 'styled-components';

function ReservationDetailRow({ title, value }) {
  return (
    <Row>
      <p>{title}</p>
      <div>{value}</div>
    </Row>
  );
}

export default ReservationDetailRow;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  p {
    color: #888;
    padding: 15px 0;
  }
  div {
    width: 70%;
    padding: 15 px 0;
    text-align: right;
  }
`;
