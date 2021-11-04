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

  const imageSlideSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (_, next) => setActiveSlide(next),
  };

  const reviewSlideSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
  };

  const textTrim = (text, charLength) => {
    try {
      if (typeof text === 'string') {
        if (text.length > charLength) {
          return text.slice(0, charLength).concat('...');
        } else {
          return text;
        }
      }
    } catch (error) {
      return error;
    }
  };

  if (type === 'main') {
    return (
      <CarouselContainer {...styles}>
        <ImageSlider {...imageSlideSettings}>
          {carouselItem.map(({ id, name, url }) => {
            return (
              <CardBox key={id}>
                <CardImg alt={name} src={url} />
              </CardBox>
            );
          })}
        </ImageSlider>
        <CardCountWrap>
          <CardCount>{activeSlide + 1}</CardCount>
          <CardCount>/</CardCount>
          <CardCount>{totalImgCount}</CardCount>
        </CardCountWrap>
      </CarouselContainer>
    );
  }

  if (type === 'review') {
    return (
      <CarouselContainer {...styles}>
        <ReviewSlider {...reviewSlideSettings}>
          {carouselItem.map(({ id, score, review_content, roomsName }) => {
            if (id < 6) {
              return (
                <ContentWrap key={id}>
                  <ContentInner>
                    <ContentHeaderWrap>
                      <HeaderLeft>
                        <HeaderText>최고</HeaderText>
                        <HeaderRate>{score}</HeaderRate>
                        <HeaderBanner>대표리뷰</HeaderBanner>
                      </HeaderLeft>
                      <HeaderRight>
                        <SupportReview>도움됐어요</SupportReview>
                        <SupportReviewCount>0</SupportReviewCount>
                      </HeaderRight>
                    </ContentHeaderWrap>
                    <UsedRoomType>{roomsName}</UsedRoomType>
                    <ReviewWrap>
                      <Review>{textTrim(review_content, 120)}</Review>
                      <MoreReview onClick="">더보기</MoreReview>
                    </ReviewWrap>
                  </ContentInner>
                </ContentWrap>
              );
            }
          })}
          <ContentWrap>
            <ContentInner>
              <NextReviewWrap>
                <NextButton>→</NextButton>
                <ReviewCount>{carouselItem.length}개의 리뷰</ReviewCount>
                <MoreReviewBtn onClick="">더보기</MoreReviewBtn>
              </NextReviewWrap>
            </ContentInner>
          </ContentWrap>
        </ReviewSlider>
      </CarouselContainer>
    );
  }
};

export default Carousel;

const CarouselContainer = styled.div`
  --width: ${props => props.width}px;
  --height: ${props => props.height}px || auto;
  position: relative;
  max-width: var(--width);
  max-height: var(--height);
  margin: 10px auto;
  overflow: hidden;
`;

const ImageSlider = styled(Slider)`
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
  height: 380px;
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

const ContentWrap = styled.div`
  padding-right: 24px;
`;

const ContentInner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 290px;
  padding: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ReviewSlider = styled(Slider)`
  .slick-active {
    width: 340px !important;
  }
`;

const ContentHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeft = styled.p`
  margin: 0;
`;

const HeaderText = styled.h1`
  display: inline-block;
  margin-right: 4px;
  line-height: 18px;
  color: #323232;
  font-size: 16px;
  font-weight: 700;
`;

const HeaderRate = styled.span`
  display: inline-block;
  margin-right: 4px;
  color: #13aab8;
  font-size: 16px;
  line-height: 18px;
`;

const HeaderBanner = styled.span`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  box-sizing: border-box;
  vertical-align: 1px;
  color: #0093a1;
  background: #e6f8fa;
  font-weight: 500;
  font-size: 11px;
`;

const HeaderRight = styled.p`
  display: inline-block;
  flex-direction: row;
  margin: 0;
`;

const SupportReview = styled.span`
  display: inline-block;
  margin-right: 5px;
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 500;
`;

const SupportReviewCount = styled.span`
  display: inline-block;
  color: #13aab8;
  font-size: 12px;
  line-height: 14px;
`;

const UsedRoomType = styled.h3`
  display: block;
  margin-top: 12px;
  line-height: 18px;
  color: #888;
  font-size: 12px;
`;

const ReviewWrap = styled.div`
  position: relative;
  height: 156px;
  margin-top: 16px;
`;

const Review = styled.p`
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  overflow-wrap: break-word;
  word-break: break-all;
  word-wrap: break-word;
`;

const MoreReview = styled.button`
  position: absolute;
  display: block;
  right: 0;
  bottom: 5px;
  margin-top: 4px;
  border: none;
  text-align: center;
  color: #db074a;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const NextReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.p`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  font-size: 26px;
`;

const ReviewCount = styled.p`
  display: block;
  margin-top: 14px;
  line-height: 1;
  text-align: center;
  color: #4d4d4d;
  font-size: 14px;
`;

const MoreReviewBtn = styled.button`
  display: block;
  margin-top: 4px;
  border: none;
  color: #db074a;
  background-color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
