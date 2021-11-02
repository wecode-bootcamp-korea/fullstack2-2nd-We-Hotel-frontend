import React from 'react';
import NaverApi from './NaverApi';
import MapModal from './MapModal';
import { mapModalId } from '../../pages/Detail/constants';
import { TOGGLEMODAL } from '../../Contexts/constants';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import styled from 'styled-components';

const MapDetail = ({ mapItem, lat, lng }) => {
  const [_, modalDispatch] = useModalDispatch();
  const hotelAddress = mapItem.detail_address;

  const onClose = () => {
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

  return (
    <MapModal id={mapModalId}>
      <MapContainer>
        <HeaderWrap>
          <TitleWrap>
            <Title>지도</Title>
          </TitleWrap>
          <CancelButton onClick={onClose}>x</CancelButton>
        </HeaderWrap>
        <MapWrap>
          <NaverApi mapItem={mapItem} lat={lat} lng={lng} />
        </MapWrap>
        <FooterInfo>
          <AddressInfo>{mapItem.detail_address}</AddressInfo>
          <CopyAddress onClick={handleCopyClipBoard}>주소 복사</CopyAddress>
        </FooterInfo>
      </MapContainer>
    </MapModal>
  );
};

export default MapDetail;

const MapContainer = styled.div`
  min-width: 768px;
  width: 100%;
  transform: translate(0);
  transition: transform 0.15s ease-out;
`;

const HeaderWrap = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 44px;
  background: white;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const TitleWrap = styled.div`
  position: absolute;
  inset: 0px;
  padding: 11px 96px;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(77, 77, 77);
`;

const CancelButton = styled.button`
  margin: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 100;

  :active {
    opacity: 0.6;
  }
`;

const MapWrap = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const FooterInfo = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  bottom: 0;
  padding: 22px 20px;
  background-color: #fff;
`;

const AddressInfo = styled.div`
  padding-right: 10px;
  font-size: 14px;
  line-height: 1.18;
  color: #4d4d4d;
`;

const CopyAddress = styled.div`
  white-space: nowrap;
  padding: 8px 10px;
  border: 1px solid #dcdcdd;
  border-radius: 1px;
  color: #4d4d4d;
  font-size: 13px;
  line-height: 0.92;
`;
