import React from 'react';
import Loading from '../../components/Loading/Loading';
import styled from 'styled-components';

const Category = props => {
  const { categoryItem, _onClick } = props;

  if (categoryItem) {
    return (
      <CategoryContainer>
        <CategoryWrap>
          {categoryItem.map(({ id, url, locationName }) => {
            return (
              <ItemWrap key={id} onClick={_onClick}>
                <ItemImage src={url} />
                <ItemName>{locationName}</ItemName>
              </ItemWrap>
            );
          })}
        </CategoryWrap>
      </CategoryContainer>
    );
  } else {
    return (
      <CategoryContainer>
        <Loading />
      </CategoryContainer>
    );
  }
};

export default Category;

const CategoryContainer = styled.div`
  max-width: 760px;
  margin: 10px auto;
  padding: 0 24px;
`;

const CategoryWrap = styled.section`
  display: flex;
  justify-content: space-around;
  height: 82px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 8px 0px;
  margin: 8px 0px;
`;

const ItemWrap = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
`;

const ItemName = styled.figcaption`
  margin-top: 6px;
  color: #4d4d4d;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;
