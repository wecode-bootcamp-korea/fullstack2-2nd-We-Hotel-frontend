import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Uprasing from '../../../components/Modals/Uprasing';

function LocationMenu({ isActive, clickLocation, isClick, onClick }) {
  return (
    <Uprasing>
      <div>까궁</div>
      {/* <LocationList className={isActive ? 'show' : 'active'}>
        <LocationSelect onClick={clickLocation}>서 울</LocationSelect>
        <LocationSelect>강 원</LocationSelect>
        <LocationSelect>부 산</LocationSelect>
        <LocationSelect>제 주</LocationSelect>
      </LocationList>
      <SubBar>
        <SubLocationList className={isClick ? 'show' : 'active'}>
          <SubLocationSelect>강남구</SubLocationSelect>
          <SubLocationSelect>강남구</SubLocationSelect>
          <SubLocationSelect>강남구</SubLocationSelect>
          <SubLocationSelect>강남구</SubLocationSelect>
        </SubLocationList>
      </SubBar> */}
    </Uprasing>
  );
}

export default LocationMenu;

const SubLocationList = styled.ul`
  max-height: 0;
  opacity: 1;
  transition: 0.4s ease-in-out;
  &.active {
    overflow: hidden;
    opacity: 0;
  }
`;

const SubBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 400px;
  z-index: 1;
`;

const LocationList = styled.ul`
  max-height: 0;
  opacity: 1;
  transition: 0.4s ease-in-out;
  &.active {
    overflow: hidden;
    opacity: 0;
  }
`;

const SubLocationSelect = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 360px;
  width: 300px;
  height: 36px;
  margin: 0 10px;
  background-color: #eee;
  cursor: pointer;
  max-height: 100vh;
`;

const LocationSelect = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 36px;
  margin: 0 10px;
  background-color: #eee;
  cursor: pointer;
  max-height: 100vh;
`;
