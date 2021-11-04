import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function NotUserPage() {
  const history = useHistory();

  const GotoLogIn = () => {
    history.push(`/login`);
  };

  const GotoWishList = () => {
    history.push(`/wishlist`);
  };

  const GotoRecentSaw = () => {
    history.push(`/recentsaw`);
  };

  return (
    <>
      <UserBox>
        <LogInDiv>
          <GoLogIn>로그인 해주세요.</GoLogIn>
          <UserDesk>회원가입하시고 다양한 혜택을 누리세요</UserDesk>
        </LogInDiv>
      </UserBox>
      <ButtonDiv>
        <LogInSignInButton onClick={GotoLogIn}>
          <Text>로그인</Text>
        </LogInSignInButton>
      </ButtonDiv>
      <SubUserBox>
        <SubList onClick={GotoRecentSaw}>최근 본 상품</SubList>
        <SubUserList onClick={GotoWishList}>위시리스트</SubUserList>
        <SubList>리서치 참여</SubList>
        <SubList>앱 다운로드</SubList>
      </SubUserBox>
    </>
  );
}

export default NotUserPage;

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

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 40px 0;
  width: 720px;
`;

const Text = styled.div`
  padding: 14px 300px 14px 300px;
  font-weight: lighter;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  &:hover {
    color: white;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.3);
  }
`;

const LogInSignInButton = styled.button`
  font-size: 22px;
  font-weight: bold;
  border: solid 2px #6e2c9b;
  color: #6e2c9b;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #6e2c9b;
  }
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

const LogInDiv = styled.div``;
