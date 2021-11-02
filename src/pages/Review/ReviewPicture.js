import React from 'react';
import styled from 'styled-components';

const ReviewPicture = props => {
  const { reviewItem, _onClick } = props;

  return (
    <ReviewPictureContainer>
      <PictureTitle>방문객 사진</PictureTitle>
      <PictureWrap>
        {reviewItem.map(({ id, url }) => {
          if (id < 6) {
            return (
              <PictureItemWrap key={id} onClick={_onClick}>
                <PictureItem img={url} />
              </PictureItemWrap>
            );
          }
          if (id === 6) {
            return (
              <PictureItemWrap key={id} onClick={_onClick}>
                <LastPictureItem img={url} alt={reviewItem.length} />
                <LastPictureText>+{reviewItem.length}</LastPictureText>
              </PictureItemWrap>
            );
          }
        })}
      </PictureWrap>
    </ReviewPictureContainer>
  );
};

export default ReviewPicture;

const ReviewPictureContainer = styled.section`
  padding: 20px 24px 20px;
`;

const PictureTitle = styled.strong`
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const PictureWrap = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 24px;
  overflow: hidden;
`;

const PictureItemWrap = styled.div`
  position: relative;
  float: left;
  width: 32.8%;
  margin-right: 0.5%;
  margin-bottom: 2px;
`;

const PictureItem = styled.img`
  background-image: url(${props => props.img});
  position: relative;
  display: block;
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const LastPictureItem = styled(PictureItem)`
  filter: blur(3px);
`;

const LastPictureText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  color: white;
  font-size: 14px;
  line-height: 1;
  z-index: 1;
  transform: translate(-50%, -50%);
`;
