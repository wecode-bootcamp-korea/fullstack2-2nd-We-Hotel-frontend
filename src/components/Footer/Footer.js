import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <MainFooter>
      <MainContainer>
        <ButtonContainer>
          <Button>APP 다운받기</Button>
          <Button>회사 소개</Button>
        </ButtonContainer>
        <WeHotel>WeHotel</WeHotel>
        <Text>(주)위호텔 공동대표:고박신신안윤ㅣ대표연락처: 1234 - 5678</Text>
        <Text>주소: 위코도 함께할시 행복하군 </Text>
        <Text>사업자등록번호: 123-45-6789</Text>
        <Text>통신판매업 신고번호: 위코드-2기</Text>
        <Text>대표이메일주소: wehotel@wecode.com</Text>
        <AgreedLink>
          이용약관ㅣ<Strong>개인정보 처리방침</Strong>ㅣ{' '}
          <Strong>위치정보 이용약관</Strong>ㅣ청소년보호정책ㅣ사업자 정보확인
        </AgreedLink>
        <SubContainer>
          <SubText>
            (주)위호텔 열정개발자로 구성되어 있으며 힘차게 달리고 있는 멋진
            사람들의 모임입니다.
          </SubText>
          <SubText>
            (주)위호텔이 소유/운영/관리하는 웹사이트 및 앱 내의
            상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를 포함하여 일체의
            콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는
            저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지
            됩니다.
          </SubText>
          <SideButton>콘텐츠산업 진흥법에 따른 표시 ►</SideButton>
        </SubContainer>
      </MainContainer>
    </MainFooter>
  );
}

export default Footer;

const Button = styled.button`
  height: 30px;
  width: 330px;
  border: 1px solid #e7e7e7;
  margin: 8px;
  cursor: pointer;
  background-color: white;
`;

const SideButton = styled.button`
  margin: 0 10px 10px 10px;
  padding: 0;
  font-size: 11px;
  font-weight: bold;
  color: gray;
  border: 0;
  outline: 0;
  background-color: #dcdde1;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 7px;
  font-size: 12px;
  color: gray;
`;

const SubText = styled.p`
  margin: 10px 0 5px 10px;
  font-size: 10px;
  color: gray;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const AgreedLink = styled.a`
  margin: 7px;
  font-size: 12px;
  text-decoration-line: none;
  color: gray;
  cursor: pointer;
`;

const WeHotel = styled.h1`
  margin: 9px;
  font-size: 25px;
  color: gray;
`;

const SubContainer = styled.div`
  position: relative;
  bottom: -10px;
  margin-top: 30px 0 15px 0;
  padding: 5px;
  background-color: #dcdde1;
`;

const MainContainer = styled.div`
  position: absolute;
  width: 768px;
  height: 335px;
  padding: 10px 15px 10px 15px;
  bottom: 44px;
  background-color: #f5f6fa;
`;

const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
