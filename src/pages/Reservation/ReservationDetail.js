import React, { useState, useEffect } from 'react';
import { ChatWarning } from '@styled-icons/fluentui-system-regular/ChatWarning';
import Header from '../../components/Header/Header';
import { reservationDetailData } from './reservationDetailData';
import ReservationDetailRow from './Components/ReservationDetailRow';
import ReservationMap from './Components/ReservationMap';
import styled from 'styled-components';

function ReservationDetail({ match }) {
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 0,
    lng: 0,
  });

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch(`/reservation/${match.params.id}`)
  //     .then(res => res.json)
  //     .then(res => setData(res));
  // }, []);

  const sample = {
    id: 1,
    accomodation_id: 1,
    name: '파크하얏트부산',
    detail_address: '부산 해운대구 마린시티1로 51',
  };

  useEffect(() => {
    ChangeCoordinate(sample.detail_address);
  }, []);

  const ChangeCoordinate = address => {
    const navermaps = window.naver.maps;

    navermaps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === navermaps.Service.Status.ERROR) {
          if (!address) {
            return alert('Geocode Error, Please check address');
          }
          return alert('Geocode Error, address:' + address);
        }

        if (response.v2.meta.totalCount === 0) {
          return alert('No result.');
        }

        let item = response.v2.addresses[0];

        setGeometricData({
          lng: item.x,
          lat: item.y,
        });
      }
    );
  };

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
        <ReservationMap
          accomodationId={accomodationId}
          mapItem={sample}
          lat={lat}
          lng={lng}
        />
        <Hotel>
          <Title>예약 정보</Title>
          <DateList>
            <ReservationDate>
              <Lable>체크인</Lable>
              <LableDate>
                {startDate} <Time>15:00</Time>
              </LableDate>
            </ReservationDate>
            <ReservationDate>
              <Lable>체크아웃</Lable>
              <LableDate>
                {endDate} <Time>15:00</Time>
              </LableDate>
            </ReservationDate>
          </DateList>
          <Stays>
            <StayTotal>1박</StayTotal>
          </Stays>
          <Title>객실 정보</Title>
          <ReservationDetailRow title={'예약장소'} value={accomodationName} />
          <ReservationDetailRow title={'객실타입'} value={roomName} />
          <ReservationDetailRow title={'위치'} value={address} />
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
            <WarningIcon />
            <WarningMessage>
              업체 사정상 주차장 이용이 어려울 수 있습니다.
            </WarningMessage>
            <WarningMessage>
              주차가 불가능할 경우 업체에서 사전에 연락을 드릴 예정입니다.
            </WarningMessage>
          </Transportation>
        </Guest>
        <Payment>
          <Title>결제 금액 정보</Title>
          <PaymentInfo>
            <ReservationDetailRow
              title={'결제일'}
              value={createdAt}
              borderBottom={'1px solid #e8e8e9'}
              titleColor={'#b3b3b3'}
              valueColor={'#b3b3b3'}
              lineHeight={'14px'}
            />
            <ReservationDetailRow
              title={'예약 금액'}
              value={numberWithCommas(totalPrice)}
              borderBottom={'1px solid #e8e8e9'}
              titleColor={'#888'}
              valueColor={'#323232'}
              lineHeight={'14px'}
            />
            <ReservationDetailRow
              title={'총 결제금액(VAT 포함)'}
              value={numberWithCommas(totalPrice)}
              titleColor={'#4d4d4d'}
              valueColor={'#db074a'}
              fontSize={'17px'}
              fontWeight={'700'}
              lineHeight={'25px'}
            />
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
  margin-top: 20px;
  color: #4d4d4d;
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

const ReservationDate = styled.li`
  float: left;
  width: 50%;
  height: 76px;
  padding: 19px 0;
  border-right: 1px solid #f8f8f9;
  text-align: center;

  &:last-child {
    border-right: 0;
  }
`;

const DateList = styled.ul`
  height: 76px;
  border-top: 1px solid #f8f8f9;
  border-bottom: 1px solid #f8f8f9;
`;

const Lable = styled.div`
  padding-bottom: 8px;
  color: #929292;
  font-size: 13px;
`;

const LableDate = styled.div`
  color: #4d4d4d;
  font-size: 13px;
`;

const Time = styled.span`
  font-size: 13px;
  font-weight: 500;
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
`;

const StayTotal = styled.span`
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
`;

const Transportation = styled.div`
  padding: 12px 20px;
`;

const WarningMessage = styled.p`
  color: #929292;
  font-size: 12px;
  line-height: 17px;
`;

const WarningIcon = styled(ChatWarning)`
  width: 22px;
  color: #929292;
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
