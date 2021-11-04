import React, { useState } from 'react';
import { MapMarkedAlt } from '@styled-icons/fa-solid/MapMarkedAlt';
import { FileCopy } from '@styled-icons/remix-line/FileCopy';
import { TOGGLEMODAL } from '../../Contexts/constants';
import { mapModalId } from '../../pages/Detail/constants';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import MapDetail from './MapDetail';
import styled from 'styled-components';

const Map = props => {
  const { mapItem, width } = props;
  const hotelAddress = mapItem.detail_address;
  const [_, modalDispatch] = useModalDispatch();
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 0,
    lng: 0,
  });

  const styles = {
    width,
  };

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

  const onClick = () => {
    ChangeCoordinate(mapItem.detail_address);
    modalDispatch({ type: TOGGLEMODAL, id: mapModalId });
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(`${hotelAddress}`);
      alert(`주소를 복사했습니다.`);
    } catch (error) {
      alert('복사를 실패하였습니다. 다시 시도해주세요.');
    }
  };

  if (mapItem) {
    return (
      <MapContainer {...styles}>
        <MapInner>
          <AddressBanner>
            <Address>{hotelAddress}</Address>
            <MapImgIcon onClick={onClick} />
          </AddressBanner>
          <CopyAddressWrap onClick={handleCopyClipBoard}>
            <CopyAddressIcon />
            <CopyAddressText>주소 복사</CopyAddressText>
          </CopyAddressWrap>
        </MapInner>
        <MapDetail mapItem={mapItem} lat={lat} lng={lng} />
      </MapContainer>
    );
  } else {
    return;
  }
};

export default Map;

const MapContainer = styled.div`
  width: ${props => props.width}px;
  height: 144px;
  margin: 0 auto;
  padding: 10px;
  background-image: url(https://t1.daumcdn.net/cfile/tistory/142C3B364F37381510);
  background-size: 100% 144px;
  background-repeat: no-repeat;
  background-position: 50%;
`;

const MapInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 0 15px;
`;

const AddressBanner = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Address = styled.span`
  font-size: 14px;
  line-height: 1.29;
  color: #4d4d4d;
  padding-right: 10px;
  word-break: break-word;
  word-wrap: break-word;
`;

const MapImgIcon = styled(MapMarkedAlt)`
  width: 43px;
  height: 43px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  background-color: #db074a;
`;

const CopyAddressWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyAddressIcon = styled(FileCopy)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const CopyAddressText = styled.span`
  font-size: 14px;
  line-height: 1.07;
  color: #4d4d4d;
`;
