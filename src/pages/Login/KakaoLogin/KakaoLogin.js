import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const { Kakao } = window;

function KakaoLogin({ maintainLogin }) {
  const history = useHistory();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`http://localhost:8000/user/kakao`, {
          method: 'POST',
          headers: {
            authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.isExistedUser) {
              localStorage.setItem('token', res.token);
              localStorage.setItem('user', JSON.stringify(res.userInfo));
              history.push('/');
            } else {
              history.push({
                pathname: '/signup',
                props: res.newUser,
              });
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <LoginButton
      href={process.env.REACT_APP_KAKAO_AUTH_URL}
      onClick={kakaoLoginClickHandler}
    >
      <KakaoIcon
        src="https://cdn.dailyhotel.com/ux/login-ic-sns-kakao.svg"
        alt="kakao"
      />
      카카오로 시작하기
    </LoginButton>
  );
}

export default KakaoLogin;

const LoginButton = styled.button`
  position: relative;
  width: 100%;
  padding: 12px 22px;
  color: #3d2221;
  background-color: #ffeb00;
  border: 0;
  font-size: 16px;
  border-radius: 3px;
  line-height: 16px;
  font-weight: 500;
`;

const KakaoIcon = styled.img`
  position: absolute;
  left: 15px;
  height: 20px;
  margin-top: -2px;
`;
