import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';
import { addToStorage } from '../utils';

function AccommodationContainer({ data, page }) {
  const history = useHistory();
  const { id, image, accommodationName, ARRAY, grade, detailAddress } = data;
  const [isClicked, setIsClicked] = useState(false);

  const handleHeart = () => {
    setIsClicked(!isClicked);
  };

  const accomodationClickHandler = () => {
    addToStorage(id);
    history.push(`/detail/${id}`);
  };

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <AccommodationBar>
      <ImageContainer>
        {isClicked ? (
          <FullHeart onClick={handleHeart} />
        ) : (
          <EmptyHeart onClick={handleHeart} />
        )}
        <GradeBox>{grade}</GradeBox>
        <HotelImage src={image} alt="" onClick={accomodationClickHandler} />
        <HotelName onClick={accomodationClickHandler}>
          {accommodationName}
        </HotelName>
        <HotelLocation>{detailAddress}</HotelLocation>
        {page !== 'recent' && (
          <Price>
            <Discount>100,000원</Discount>
          </Price>
        )}
      </ImageContainer>
    </AccommodationBar>
  );
}

export default AccommodationContainer;

const GradeBox = styled.div`
  position: absolute;
  color: white;
  border: 1px solid white;
  top: 210px;
  left: 15px;
  padding: 5px 10px 2px 10px;
  font-size: 12px;
`;

const Discount = styled.div`
  padding: 0 0 0 20px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  position: relative;
`;

const HotelLocation = styled.div`
  padding: 20px 0 0 20px;
  margin-bottom: 15px;
  color: #636e72;
`;

const HotelName = styled.div`
  font-size: 20px;
  padding: 20px 0 0 20px;
`;

const EmptyHeart = styled(Heart)`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 25px;
  color: white;
`;

const FullHeart = styled(HeartFill)`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 25px;
  color: #ee5253;
`;

const HotelImage = styled.img`
  width: 768px;
  height: 246px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 768px;
  background-color: whitesmoke;
`;

const AccommodationBar = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 768px;
`;
