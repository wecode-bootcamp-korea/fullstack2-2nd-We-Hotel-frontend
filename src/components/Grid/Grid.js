import React from 'react';
import styled from 'styled-components';

const Grid = props => {
  const { locationItem, width, title, subTitle, _onClick } = props;
  const styles = {
    width,
  };

  if (locationItem) {
    return (
      <GridContainer {...styles}>
        <TitleWrap>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <AllViewBtn type="button" onClick={_onClick}>
            ➥ 모두 보기
          </AllViewBtn>
        </TitleWrap>
        <ContentsWrap>
          {locationItem.map(
            ({
              id,
              accommodation,
              grade,
              image_url,
              percentage,
              price,
              towns_name,
            }) => {
              const discountedPrice = (
                Math.floor((price * (percentage / 100)) / 100) * 100
              ).toLocaleString();

              return (
                <ContentItemWrap key={id}>
                  <ContentImage src={image_url} />
                  <ContentTextWrap>
                    <HotelLocation>
                      {towns_name} | {grade}
                    </HotelLocation>
                    <HotelName>{accommodation}</HotelName>
                    <HotelNormalPrice>{price}</HotelNormalPrice>
                    <PriceWrap>
                      <DiscountRate>{percentage}%</DiscountRate>
                      <PriceText>{discountedPrice}원 부터</PriceText>
                    </PriceWrap>
                  </ContentTextWrap>
                </ContentItemWrap>
              );
            }
          )}
        </ContentsWrap>
      </GridContainer>
    );
  } else {
    return <div>로딩중</div>;
  }
};

export default Grid;

Grid.defaultProps = {
  width: '100%',
  _onClick: () => {},
};

const GridContainer = styled.article`
  position: relative;
  width: ${props => props.width}px;
  margin: 40px auto;
  overflow: hidden;
`;

const TitleWrap = styled.hgroup`
  position: relative;
  padding: 0px 24px;
`;

const Title = styled.h1`
  margin: 16px 0px 6px;
  line-height: 32px;
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  margin-bottom: 16px;
  color: #888888;
`;

const AllViewBtn = styled.button`
  position: absolute;
  display: inline-block;
  right: 24px;
  bottom: 0px;
  margin-right: 4px;
  border: none;
  color: rgb(102, 102, 102);
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

const ContentsWrap = styled.section`
  margin-top: 16px;
  padding: 0 24px;
  border-top: 1px solid #e7e7e7;
`;

const ContentItemWrap = styled.figure`
  float: left;
  width: 49%;
  margin-top: 20px;
  margin-right: 1%;
`;

const ContentImage = styled.img`
  display: block;
  width: 100%;
  height: 283px;
  background: #e7e7e7;
`;

const ContentTextWrap = styled.figcaption`
  min-height: 101px;
  margin-top: 12px;
`;

const HotelLocation = styled.h4`
  margin-bottom: 3px;
  line-height: 14px;
  color: #888888;
  font-size: 11px;
`;

const HotelName = styled.h2`
  color: #4d4d4d;
  line-height: 20px;
  font-weight: 500;
`;

const HotelNormalPrice = styled.h2`
  display: block;
  margin-top: 2px;
  color: #c5c5c5;
  font-size: 11px;
  font-weight: 500;
  text-decoration: line-through;
`;

const PriceWrap = styled.div`
  margin-top: 4px;
  color: #333333;
  font-weight: 700;
`;

const DiscountRate = styled.strong`
  display: inline-block;
  margin-right: 5px;
  color: #db074a;
  font-weight: 500;
`;

const PriceText = styled.em`
  display: inline-block;
  color: #333333;
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
`;
