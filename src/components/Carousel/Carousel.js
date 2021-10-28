import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = props => {
  const { carouselItem, type, width, height } = props;
  const totalImgCount = carouselItem.length;
  const [activeSlide, setActiveSlide] = useState(1);

  const styles = {
    width,
    height,
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setActiveSlide(next),
  };

  if (type === 'main') {
    return (
      <CarouselContainer {...styles}>
        <StyledSlider {...settings}>
          {carouselItem.map(({ id, name, url }) => {
            return (
              <CardBox>
                <CardImg key={id} alt={name} src={url} />
              </CardBox>
            );
          })}
        </StyledSlider>
        <CardCountWrap>
          <CardCount>{activeSlide + 1}</CardCount>
          <CardCount>/</CardCount>
          <CardCount>{totalImgCount}</CardCount>
        </CardCountWrap>
      </CarouselContainer>
    );
  }
};

export default Carousel;

const CarouselContainer = styled.div`
  --width: ${props => props.width}px;
  --height: ${props => props.height}px;
  position: relative;
  width: var(--width);
  max-height: var(--height);
  margin: 10px auto;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    list-style: none;
    z-index: 1;
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CardCountWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 21px;
  bottom: 12px;
  left: auto;
  right: 12px;
  padding: 0px;
  border-radius: 12px;
  line-height: 21px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  z-index: 100;
`;

const CardCount = styled.span`
  display: inline-block;
  line-height: 21px;
  color: white;
  font-size: 11px;
`;
