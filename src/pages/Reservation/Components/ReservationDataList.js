import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function ReservationDataList({ data }) {
  const {
    id,
    img,
    name,
    expected,
    expectedDate,
    roomgrade,
    checkInDate,
    checkOutDate,
  } = data;

  const history = useHistory();

  const hotelClickHandler = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <ListCheckBox>
      <Description>
        <ReservationSchedule>{expected}</ReservationSchedule>
        <ReservationDate>{expectedDate}</ReservationDate>
      </Description>
      <HotelInfo onClick={hotelClickHandler}>
        <HotelName>{name}</HotelName>
        <LayOut>
          <InfoTable>
            <HotelCheck>
              <CheckText>
                <CheckInOut>체크인</CheckInOut>
                <CheckInDate>{checkInDate}</CheckInDate>
              </CheckText>
              <CheckText>
                <CheckInOut>체크아웃</CheckInOut>
                <CheckInDate>{checkOutDate}</CheckInDate>
              </CheckText>
              <CheckText>
                <CheckInOut>객실타입</CheckInOut>
                <CheckInDate>{roomgrade}</CheckInDate>
              </CheckText>
            </HotelCheck>
          </InfoTable>
          <ImageWrapper>
            <HotelImage src={img} alt="" />
          </ImageWrapper>
        </LayOut>
      </HotelInfo>
    </ListCheckBox>
  );
}

export default ReservationDataList;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 12px 20px;
  background-color: white;
  border-bottom: 1px dashed rgb(171, 171, 171);
`;

const CheckText = styled.div`
  display: flex;
  align-items: center;
  min-height: 16px;
`;

const LayOut = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 74px;
  padding-right: 81px;
`;

const InfoTable = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 14px;
`;

const HotelCheck = styled.div`
  height: 74px;
  padding-right: 81px;
`;

const HotelInfo = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 8px 16px;
  background-color: white;
`;

const HotelName = styled.div`
  margin-top: 15px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
`;

const CheckInOut = styled.div`
  min-width: 48px;
  color: rgb(136, 136, 136);
  margin-right: 8px;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.33;
`;

const CheckInDate = styled.div`
  color: rgb(77, 77, 77);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

const HotelImage = styled.img`
  height: 100%;
  min-width: 60px;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 5%;
  top: 0;
  width: 60px;
  height: 60px;
`;

const ReservationSchedule = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  color: rgb(171, 171, 171);
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;

const ReservationDate = styled.div`
  margin-top: 4px;
  color: rgb(171, 171, 171);
  font-size: 12px;
  line-height: 1.33;
`;

const ListCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px 10px 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: white;
`;
