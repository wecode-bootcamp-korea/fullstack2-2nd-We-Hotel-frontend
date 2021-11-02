import React, { useState, useEffect } from 'react';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import ReviewModal from './ReviewModal';
import { reviewModalId } from '../Detail/constants';
import { TOGGLEMODAL } from '../../Contexts/constants';
import { _map } from '../../utils/function';
import { CancelPresentation } from '@styled-icons/material/CancelPresentation';
import styled from 'styled-components';

const RoomFilter = ({ filterList, selectRoomType }) => {
  const [roomFilterList, setRoomFilterList] = useState([]);
  const [modalState, modalDispatch] = useModalDispatch();

  const onClose = () => {
    modalDispatch({ type: TOGGLEMODAL, id: reviewModalId });
  };

  return (
    <ReviewModal id={'modal_4'}>
      <RoomFilterContainer>
        <TitleWrap>
          <Title>객실</Title>
          <CancelButtonWrap onClick={onClose}>
            <CancelButtonIcon />
          </CancelButtonWrap>
        </TitleWrap>
        <RoomTypeWrap>
          {filterList.map(({ id, roomsName, rooms_id, isSelect }) => {
            return (
              <RoomItem key={id}>
                <RoomSelectWrap>
                  <RoomSelect
                    id={id}
                    className={isSelect ? 'on' : ''}
                    name={roomsName}
                    value={rooms_id}
                    isSelect={isSelect}
                    onClick={selectRoomType}
                  >
                    {roomsName}
                  </RoomSelect>
                </RoomSelectWrap>
              </RoomItem>
            );
          })}
        </RoomTypeWrap>
      </RoomFilterContainer>
    </ReviewModal>
  );
};

export default RoomFilter;

const RoomFilterContainer = styled.div`
  position: relative;
  width: 768px;
  height: max-content;
  padding-bottom: 24px;
`;

const TitleWrap = styled.div`
  position: relative;
  padding: 20px 64px 0 10px;
  margin-bottom: 20px;
  color: #111;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: normal;
`;

const CancelButtonWrap = styled.button`
  position: absolute;
  top: 16px;
  right: 8px;
  border: none;
  background-color: #fff;
`;

const CancelButtonIcon = styled(CancelPresentation)`
  width: 30px;
  vertical-align: top;
  color: #db074a;
`;

const RoomTypeWrap = styled.ul`
  width: 100%;
`;

const RoomItem = styled.li`
  position: relative;
  padding: 16px 64px 16px 10px;
  margin: 20px 0;
`;

const RoomSelectWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 1.25;
  color: #333;
  font-size: 16px;
  letter-spacing: normal;

  .on {
    color: #db074a;

    &::after {
      position: absolute;
      display: inline-block;
      top: -3px;
      right: 24px;
      width: 24px;
      height: 24px;
      background-image: url(https://cdn.dailyhotel.com/ux/ic-filter-check.svg);
      content: '';
    }
  }
`;

const RoomSelect = styled.div`
  display: inline-block;
  position: absolute;
  width: 100%;
  z-index: 1;

  &:hover {
    cursor: pointer;
    /* color: #db074a; */
  }
`;
