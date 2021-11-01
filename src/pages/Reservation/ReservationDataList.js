import React from 'react';
import styled from 'styled-components';

function ReservationDataList({ data }) {
  const {
    id,
    img,
    name,
    expected,
    expectedDate,
    room,
    roomgrade,
    checkIn,
    checkInDate,
    checkOut,
    checkOutDate,
  } = data;

  return (
    <ListCheckBox>
      <ReservationSchedule>{expected} </ReservationSchedule>
      <ReservationDate>{expectedDate}</ReservationDate>
      <HotelInfo>
        <HotelName>{name}</HotelName>
        <LayOut>
          <HotelCheck>
            <CheckText>
              <CheckInOut>{checkIn}</CheckInOut>
              <CheckInDate>{checkInDate}</CheckInDate>
            </CheckText>
            <CheckText>
              <CheckInOut>{checkOut}</CheckInOut>
              <CheckOutDate>{checkOutDate}</CheckOutDate>
            </CheckText>
            <CheckText>
              <Room>{room}</Room>
              <RoomGrade>{roomgrade}</RoomGrade>
            </CheckText>
          </HotelCheck>
          <HotelImage src={img} alt="" />
        </LayOut>
      </HotelInfo>
    </ListCheckBox>
  );
}

export default ReservationDataList;

const CheckText = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-left: 0;
`;

const LayOut = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

const HotelCheck = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 60px 60px 60px;
  padding: 30px 0 30px 0;
  background-color: white;
`;

const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
  font-size: 15px;
  color: gray;
`;

const RoomGrade = styled.div`
  padding-left: 44px;
  margin-bottom: 5px;
  font-size: 15px;
`;

const HotelName = styled.div`
  font-size: 25px;
  font-weight: lighter;
  padding: 0 80px 20px 80px;
`;

const CheckInOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-size: 15px;
  color: gray;
`;

const CheckInDate = styled.div`
  padding-left: 33px;
  margin-bottom: 5px;
  font-size: 15px;
`;

const CheckOutDate = styled.div`
  padding-left: 20px;
  margin-bottom: 5px;
  font-size: 15px;
`;

const HotelImage = styled.img`
  width: 10%;
`;

const ReservationSchedule = styled.div`
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
  color: gray;
`;

const ReservationDate = styled.div`
  font-size: 10px;
  color: gray;
`;

const ReservationList = styled.div`
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 10px;
`;

const ListCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f6;
  padding: 0 10px 10px 10px;
`;
