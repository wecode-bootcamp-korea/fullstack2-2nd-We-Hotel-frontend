import React from 'react';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router';
import { Eye } from '@styled-icons/bootstrap/Eye';
import { Hotel } from '@styled-icons/fa-solid/Hotel';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { Reviews } from '@styled-icons/material-outlined/Reviews';
import { ProductHunt } from '@styled-icons/boxicons-logos/ProductHunt';
import { ArrowBarRight } from '@styled-icons/bootstrap/ArrowBarRight';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import styled from 'styled-components';

function MyDaily() {
  const history = useHistory();

  const GotoLogIn = () => {
    history.push(`/login`);
  };

  const GotoSignUp = () => {
    history.push(`/signup`);
  };

  const GotoMain = () => {
    history.push(`/`);
  };

  const GotoReservation = () => {
    history.push(`/reservation`);
  };

  return (
    <>
      <Header page={'마이데일리'} />
      <MainMyDaily>
        <UserBox>
          <UserInfo>
            <UserDiv>
              <UserData>
                윤탕헌 <UserGrade>SILVER</UserGrade>
              </UserData>
              <UserEmail>changh950@gamil.com</UserEmail>
            </UserDiv>
            <LogOutIcon />
          </UserInfo>
          <UserCardBox>
            <UserItem>
              <CouponPoint>
                <UserCoupon>
                  할인쿠폰
                  <GoArrow />
                </UserCoupon>
                <DetailCoupon>4개</DetailCoupon>
              </CouponPoint>
              <CouponPoint>
                <UserPoint>
                  포인트
                  <GoArrow />
                </UserPoint>
                <DetailPoint>
                  <PointIcon />
                  1000
                </DetailPoint>
              </CouponPoint>
            </UserItem>
          </UserCardBox>
          <UserCardBox>
            <UserItem>
              <UserWishList>
                <ListName>위시리스트</ListName>
                <DetailList>
                  <HeartIcon />0
                </DetailList>
              </UserWishList>
              <UserSawList>
                <ListName>최근 본 상품</ListName>
                <DetailList>
                  <EyeIcon />
                  10
                </DetailList>
              </UserSawList>
              <UserReveiwList>
                <ListName>나의 트루리뷰</ListName>
                <DetailList>
                  <ReviewIcon />
                  20
                </DetailList>
              </UserReveiwList>
            </UserItem>
          </UserCardBox>
          <GoMain>
            <GoMainButton onClick={GotoMain}>
              위호텔의 감성적인 호텔 둘러보기! <GoMainIcon />
            </GoMainButton>
          </GoMain>
        </UserBox>
        <SubUserBox>
          <SubReservationList onClick={GotoReservation}>
            예약/구매 내역
          </SubReservationList>
          <SubUserList>결제카드관리</SubUserList>
          <SubList>회원등급 혜택</SubList>
          <SubList>앱 다운로드</SubList>
          <SubList>리서치 참여</SubList>
        </SubUserBox>
      </MainMyDaily>

      {/* //로그인 전 */}

      <Header page={'마이데일리'} />
      <MainMyDaily>
        <UserBox>
          <LogInDiv>
            <GoLogIn>로그인 해주세요.</GoLogIn>
            <UserDesk>회원가입하시고 다양한 혜택을 누리세요</UserDesk>
          </LogInDiv>
        </UserBox>
        <ButtonDiv>
          <LogInSignInButton onClick={GotoLogIn}>로그인</LogInSignInButton>
          <LogInSignInButton onClick={GotoSignUp}>회원가입</LogInSignInButton>
        </ButtonDiv>
        <SubUserBox>
          <SubList>최근 본 상품</SubList>
          <SubUserList>위시리스트</SubUserList>
          <SubList>리서치 참여</SubList>
          <SubList>앱 다운로드</SubList>
        </SubUserBox>
      </MainMyDaily>
    </>
  );
}

export default MyDaily;

const SubReservationList = styled.a`
  font-size: 20px;
  font-weight: lighter;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const SubList = styled.a`
  font-size: 20px;
  font-weight: lighter;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const SubUserList = styled.a`
  font-size: 20px;
  font-weight: lighter;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdc3c7;
  cursor: pointer;
`;

const SubUserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
`;

const GoMainIcon = styled(Hotel)`
  width: 25px;
  color: gray;
`;

const GoMainButton = styled.button`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  padding: 15px;
  border: none;
  border-radius: 4px;
  color: #57606f;
  background-color: #f1f2f6;
  cursor: pointer;
`;

const GoMain = styled.div`
  margin: auto;
  width: 720px;
  padding-bottom: 20px;
`;

const DetailList = styled.div`
  margin-top: 5px;
  font-weight: bold;
`;

const ReviewIcon = styled(Reviews)`
  width: 20px;
  margin-right: 5px;
`;

const EyeIcon = styled(Eye)`
  width: 20px;
  margin-right: 5px;
`;

const HeartIcon = styled(Heart)`
  width: 20px;
  margin-right: 5px;
`;

const ListName = styled.div`
  font-weight: lighter;
`;

const UserWishList = styled.div`
  width: 30%;
  text-align: center;
  cursor: pointer;
`;
const UserSawList = styled.div`
  width: 30%;
  text-align: center;
  cursor: pointer;
`;
const UserReveiwList = styled.div`
  width: 30%;
  text-align: center;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px 0;
  width: 720px;
`;

const LogInSignInButton = styled.button`
  width: 355px;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  border: solid 2px #6e2c9b;
  color: #6e2c9b;
  background-color: white;
  cursor: pointer;
`;

const PointIcon = styled(ProductHunt)`
  width: 20px;
  margin-right: 3px;
`;

const DetailCoupon = styled.div`
  margin-top: 5px;
  font-weight: bold;
`;

const DetailPoint = styled.div`
  margin-top: 5px;
  color: #e58e26;
`;

const GoArrow = styled(ArrowIosForwardOutline)`
  width: 20px;
`;

const CouponPoint = styled.div`
  width: 50%;
  :last-child {
    padding-left: 10px;
    border-left: 1px solid #bdc3c7;
  }
`;

const UserPoint = styled.li`
  font-weight: lighter;
  list-style: none;
`;

const UserCoupon = styled.li`
  font-weight: lighter;
  list-style: none;
`;

const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const UserCardBox = styled.div`
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid #bdc3c7;
  width: 720px;
`;

const LogOutIcon = styled(ArrowBarRight)`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
  width: 25px;
  color: #a4b0be;
  cursor: pointer;
`;

const UserEmail = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  color: gray;
`;

const UserGrade = styled.div`
  font-size: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid gray;
  margin-left: 5px;
  color: gray;
`;

const UserData = styled.div`
  display: flex;
  font-size: 24px;
  padding: 30px 20px 5px 20px;
`;

const UserDesk = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  color: gray;
`;

const GoLogIn = styled.div`
  display: flex;
  font-size: 24px;
  padding: 30px 20px 5px 20px;
`;

const UserBox = styled.div`
  width: 768px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserDiv = styled.div``;

const LogInDiv = styled.div``;

const MainMyDaily = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
