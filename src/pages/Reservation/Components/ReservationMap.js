import React from 'react';
import NaverApi from '../../../components/Map/NaverApi';
import { Link } from 'react-router-dom';
import { BookOpen } from '@styled-icons/feather/BookOpen';
import { MapPin } from '@styled-icons/feather/MapPin';
import { Edit } from '@styled-icons/feather/Edit';
import styled from 'styled-components';

function ReservationMap({ accomodationId, mapItem, lat, lng }) {
  const notReadyHandler = () => {
    alert('준비중인 서비스입니다.');
  };

  return (
    <Map>
      <MapImg>
        <NaverApi mapItem={mapItem} lat={lat} lng={lng} />
      </MapImg>
      <MapInfo>
        <MapInfoBox>
          <MapInfoTitle>hotel name</MapInfoTitle>
          <MapInfoBtn>
            <MapInfoBtn>
              <Btn>
                <Link to={`/detail/:${accomodationId}`}>
                  <OpenIcon />
                  <div>상세 정보 보기</div>
                </Link>
              </Btn>
              <Btn onClick={notReadyHandler}>
                <MapIcon />
                <div>길찾기</div>
              </Btn>
              <Btn onClick={notReadyHandler}>
                <EditIcon />
                <div>리뷰 입력</div>
              </Btn>
            </MapInfoBtn>
          </MapInfoBtn>
        </MapInfoBox>
      </MapInfo>
    </Map>
  );
}

export default ReservationMap;

const Map = styled.div`
  position: relative;
  height: 270px;
  background-color: rgb(229, 227, 223);
`;

const MapImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: yellow;
  overflow: hidden;
`;

const MapInfo = styled.div`
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  padding: 0 20px;
`;

const MapInfoBox = styled.div`
  border: 1px solid #c5c5c5;
  background-color: #fff;
`;

const MapInfoTitle = styled.div`
  padding: 15px 0;
  color: #4d4d4d;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  line-height: 19px;
  font-size: 18px;
  font-weight: 600;
`;

const MapInfoBtn = styled.ul`
  overflow: hidden;
`;

const Btn = styled.li`
  position: relative;
  float: left;
  width: 33.3%;
  padding: 5px;
  border-right: 1px solid #f0f0f0;
  background-color: #fff;
  font-size: 13px;
  text-align: center;
`;

const OpenIcon = styled(BookOpen)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

const MapIcon = styled(MapPin)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

const EditIcon = styled(Edit)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;
