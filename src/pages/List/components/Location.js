import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Uprasing from '../../../components/Modals/Uprasing';
import styled from 'styled-components';

function LocationMenu({ townName }) {
  const history = useHistory();
  const [city, setCity] = useState([]);
  const [town, setTown] = useState({});
  const [cityId, setCityId] = useState(1);

  useEffect(() => {
    fetch('http://localhost:8000/category')
      .then(res => res.json())
      .then(res => {
        setCity(res.categoryList);
        setTown(res.categoryList[0].town);
        setCityId(res.categoryList[0].id);
      });
  }, []);

  const onClick = id => {
    const cityChoice = city.find(item => item.id === id);
    setTown(cityChoice.town);
    setCityId(id);
  };

  return (
    <Uprasing id={'modal_1'}>
      <Modal>
        <LocationList>
          {Object.keys(city).length > 0 &&
            city.map(element => {
              return (
                <LocationSelect
                  cityId={cityId}
                  id={element.id}
                  onClick={() => onClick(element.id)}
                  key={element.id}
                >
                  {element.city}
                </LocationSelect>
              );
            })}
        </LocationList>
        <SubBar>
          <SubLocationList>
            {town.length > 0 &&
              town.map(item => (
                <SubLocationSelect
                  onClick={() => {
                    townName(item.name);
                    history.push(`/list/hotel/location/${item.id}`);
                  }}
                  key={item.key}
                >
                  {item.name}
                </SubLocationSelect>
              ))}
          </SubLocationList>
        </SubBar>
      </Modal>
    </Uprasing>
  );
}

export default LocationMenu;

const Modal = styled.div`
  display: flex;
  border-top: solid 3px #6e2c9b;
`;

const LocationList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SubLocationList = styled.ul``;

const SubBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubLocationSelect = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-right: 90px;
  width: 600px;
  height: 36px;
  border-left: solid 1px #f0f0f0;
  font-weight: lighter;
  cursor: pointer;
`;

const LocationSelect = styled.li`
  color: ${({ id, cityId }) => (id === cityId ? '#6e2c9b' : 'gray')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  border-bottom: solid 1px #f0f0f0;
  cursor: pointer;
`;
