import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faEdit,
  faFolderOpen,
} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

function ReservationMap({ accomodationId }) {
  const notReadyHandler = () => {
    alert('준비중인 서비스입니다.');
  };

  return (
    <Map>
      <MapImg>map</MapImg>
      <MapInfo>
        <MapInfoBox>
          <MapInfoTitle>hotel name</MapInfoTitle>
          <MapInfoBtn>
            <ul>
              <li>
                <Link to={`/detail/:${accomodationId}`}>
                  <FontAwesomeIcon icon={faFolderOpen} className="mapIcon" />
                  <div>상세 정보 보기</div>
                </Link>
              </li>
              <li onClick={notReadyHandler}>
                <FontAwesomeIcon icon={faCompass} className="mapIcon" />
                <div>길찾기</div>
              </li>
              <li onClick={notReadyHandler}>
                <FontAwesomeIcon icon={faEdit} className="mapIcon" />
                <div>리뷰 입력</div>
              </li>
            </ul>
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

  a {
    color: black;
    text-decoration: none;
    outline: none;

    &:hover,
    &:active {
      text-decoration: none;
      color: black;
    }
  }
`;

const MapImg = styled.div`
  position: relative;
  width: 100%;
  height: 211px;
  background-color: yellow;
  overflow: hidden;
`;

const MapInfo = styled.div`
  position: absolute;
  top: 131px;
  left: 0;
  right: 0;
  padding: 0 20px;
`;

const MapInfoBox = styled.div`
  border: 1px solid #c5c5c5;
  background-color: #fff;
`;

const MapInfoTitle = styled.div`
  padding: 25px 0;
  color: #4d4d4d;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  line-height: 19px;
  font-size: 18px;
  font-weight: 600;
`;

const MapInfoBtn = styled.div`
  ul {
    overflow: hidden;

    li {
      position: relative;
      float: left;
      width: 33.3%;
      padding: 10px;
      border-right: 1px solid #f0f0f0;
      background-color: #fff;
      font-size: 13px;
      text-align: center;

      .mapIcon {
        width: 18px;
        height: 18px;
        margin-bottom: 5px;
      }
    }
  }
`;
