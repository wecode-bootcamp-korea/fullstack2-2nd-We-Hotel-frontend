import React from 'react';
import { KeyboardArrowDown } from '@styled-icons/material-sharp/KeyboardArrowDown';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-sharp/KeyboardArrowDown';
import { useModalDispatch } from '../../Contexts/ModalContext/ModalContext';
import { reviewModalId } from '../Detail/constants';
import { TOGGLEMODAL } from '../../Contexts/constants';
import styled from 'styled-components';

const ReviewFilter = props => {
  const [modalState, modalDispatch] = useModalDispatch();

  const onClick = () => {
    modalDispatch({ type: TOGGLEMODAL, id: reviewModalId });
  };

  return (
    <FilterContainer>
      <RoomToggleWrap>
        <RoomToggleTitle>객실 선택</RoomToggleTitle>
        <ToggleBoxWrap onClick={onClick}>
          <RoomToggleText>객실 전체</RoomToggleText>
          <ArrowDownIcon />
        </ToggleBoxWrap>
      </RoomToggleWrap>
      <ReviewFilterWrap>
        <PictureOnlyCheckBoxWrap>
          <PictureOnlyCheckBox type="checkbox" id="picOnlyCheckBox" />
          <PictureOnlyLabel for="picOnlyCheckBox">사진리뷰만</PictureOnlyLabel>
        </PictureOnlyCheckBoxWrap>
        <FilterCategoryWrap>
          <FilterCategory>베스트순</FilterCategory>
          <ToggleIcon />
        </FilterCategoryWrap>
      </ReviewFilterWrap>
    </FilterContainer>
  );
};

export default ReviewFilter;

const FilterContainer = styled.div`
  width: 100%;
`;

const RoomToggleWrap = styled.div`
  margin: 15px 0;
`;

const RoomToggleTitle = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #4d4d4d;
`;

const ToggleBoxWrap = styled.button`
  position: relative;
  width: 100%;
  margin: 8px 0 16px;
  padding: 12px 38px 12px 18px;
  border: 1px solid #db074a;
  border-radius: 2px;
  color: #db074a;
  background-color: #fff;
`;

const RoomToggleText = styled.p`
  font-size: 16px;
  text-align: left;
`;

const ArrowDownIcon = styled(KeyboardArrowDown)`
  position: absolute;
  display: block;
  right: 16px;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translate(0, -50%);
`;

const ReviewFilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const PictureOnlyCheckBoxWrap = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: 24px;
  margin: 0;
`;

const PictureOnlyCheckBox = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;

  &:checked + label:before {
    width: 24px;
    height: 24px;
    left: 0;
    top: -5px;
    opacity: 1;
    background: url(https://cdn.dailyhotel.com/ux/05-selection-control-03-check-box-check-box-a-on.svg)
      no-repeat;
    background-size: 24px 24px;
  }
`;

const PictureOnlyLabel = styled.label`
  position: relative;
  display: inline-block;
  padding: 0 0 0 30px;
  vertical-align: top;
  color: #4d4d4d;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: url(https://cdn.dailyhotel.com/ux/05-selection-control-03-check-box-check-box-a-off.svg)
      no-repeat;
    background-size: 24px 24px;
    position: absolute;
    left: 0;
    top: -5px;
    z-index: 1;
  }
`;

const FilterCategoryWrap = styled.div`
  position: relative;
  padding-right: 26px;
  cursor: pointer;
`;

const FilterCategory = styled.button`
  color: #4d4d4d;
  font-weight: 700;
  background: #fff;
  border: initial;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 8px;
    top: 12px;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
  }
`;

const ToggleIcon = styled(ArrowDown)`
  position: absolute;
  display: block;
  top: 50%;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #db074a;
  transform: translate(0, -50%);
`;
