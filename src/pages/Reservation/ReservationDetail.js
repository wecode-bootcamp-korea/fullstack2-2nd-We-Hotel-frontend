import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import { reservationDetailData } from './reservationDetailData';
import ReservationDetailRow from './ReservationDetailRow';
import ReservationMap from './ReservationMap';
import styled from 'styled-components';

function ReservationDetail({ match }) {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch(`/reservation/${match.params.id}`)
  //     .then(res => res.json)
  //     .then(res => setData(res));
  // }, []);

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const {
    startDate,
    endDate,
    accomodationId,
    accomodationName,
    roomName,
    address,
    userName,
    phoneNumber,
    email,
    byCar,
    totalPrice,
    createdAt,
  } = reservationDetailData;

  return (
    <>
      <Header page="예약/구매내역" />
      <Reservation>
        <ReservationMap accomodationId={accomodationId} />
        <Hotel>
          <Title>예약 정보</Title>
          <Date>
            <ul>
              <li>
                <Lable>체크인</Lable>
                <LableDate>
                  {startDate} <span class="Bold">15:00</span>
                </LableDate>
              </li>
              <li>
                <Lable>체크아웃</Lable>
                <LableDate>
                  {endDate} <span class="Bold">15:00</span>
                </LableDate>
              </li>
            </ul>
            <Stays>
              <span>1박</span>
            </Stays>
          </Date>
          <div>
            <Title>객실 정보</Title>
            <ReservationDetailRow title={'예약장소'} value={accomodationName} />
            <ReservationDetailRow title={'객실타입'} value={roomName} />
            <ReservationDetailRow title={'위치'} value={address} />
          </div>
        </Hotel>
        <Guest>
          <Title>예약자 정보</Title>
          <ReservationDetailRow title={'예약자명'} value={userName} />
          <ReservationDetailRow title={'연락처'} value={phoneNumber} />
          <ReservationDetailRow title={'이메일'} value={email} />
          <ReservationDetailRow
            title={'방문방법'}
            value={byCar ? '차량' : '도보'}
          />
          <Transportation>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <p>업체 사정상 주차장 이용이 어려울 수 있습니다.</p>
            <p>주차가 불가능할 경우 업체에서 사전에 연락을 드릴 예정입니다.</p>
          </Transportation>
        </Guest>
        <Payment>
          <Title>결제 금액 정보</Title>
          <PaymentInfo>
            <PaymentDate>
              <div>결제일</div>
              <div>{createdAt}</div>
            </PaymentDate>
            <ReservationPrice>
              <p>예약 금액</p>
              <div>{numberWithCommas(totalPrice)}</div>
            </ReservationPrice>
            <TotalPrice>
              <p>총 결제금액(VAT 포함)</p>
              <div>{numberWithCommas(totalPrice)}원</div>
            </TotalPrice>
          </PaymentInfo>
        </Payment>
      </Reservation>
    </>
  );
}

export default ReservationDetail;

const Reservation = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #4d4d4d;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 36px;
`;

const Hotel = styled.div`
  position: relative;
  padding: 0 20px 15px;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f9;
`;

const Date = styled.div`
  ul {
    height: 76px;
    border-top: 1px solid #f8f8f9;
    border-bottom: 1px solid #f8f8f9;

    li {
      float: left;
      width: 50%;
      height: 76px;
      padding: 19px 0;
      border-right: 1px solid #f8f8f9;
      text-align: center;
    }

    li:last-child {
      border-right: 0;
    }
  }
`;

const Lable = styled.div`
  color: #929292;
  padding-bottom: 8px;
  font-size: 13px;
`;

const LableDate = styled.div`
  color: #4d4d4d;
  font-size: 13px;

  span {
    font-size: 13px;
    font-weight: 500;
  }
`;

const Stays = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 82px;
  left: 0px;
  width: 100%;
  height: 100%;
  text-align: center;

  span {
    position: relative;
    display: inline-block;
    padding: 4px 6px;
    border-radius: 8px;
    background-color: #f1f1f1;
    color: #666;
    text-align: center;
    line-height: 1.09;
    font-size: 11px;
    z-index: 2;
  }
`;

const Transportation = styled.div`
  padding: 12px 20px;

  p {
    color: #929292;
    font-size: 12px;
    line-height: 17px;
  }
`;

const Guest = styled.div`
  padding: 0 20px 15px;
  border-bottom: 1px solid #f8f8f9;
`;

const Payment = styled.div`
  margin-bottom: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #f8f8f9;
`;

const PaymentInfo = styled.div`
  padding: 0 10px;
  margin-top: 15px;
  border: 1px solid #e8e8e9;
  background-color: #fafafb;
`;

const PaymentDate = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e9;

  div {
    color: #b3b3b3;
    font-size: 14px;
    line-height: 35px;
  }
`;
const ReservationPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #888;
    font-size: 14px;
    line-height: 40px;
  }

  div {
    color: #323232;
    font-size: 14px;
    line-height: 40px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e8e8e9;

  p {
    color: #4d4d4d;
    font-weight: 700;
    font-size: 15px;
    line-height: 55px;
  }

  div {
    color: #db074a;
    font-weight: 700;
    font-size: 15px;
    line-height: 55px;
  }
`;
