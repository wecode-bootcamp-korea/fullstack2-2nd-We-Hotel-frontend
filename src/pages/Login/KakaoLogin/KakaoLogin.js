import React from 'react';
import { useHistory } from 'react-router';
import KAKAO_AUTH_URL from './OAuth';
import styled from 'styled-components';

const { Kakao } = window;

function KakaoLogin({ maintainLogin }) {
  const history = useHistory();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch('/user/kakao', {
          method: 'POST',
          body: JSON.stringify({
            authObj,
          }),
        })
          .then(res => res.json())
          .then(res => {
            //isUser & token & userInfo
            if (res.isExistedUser) {
              maintainLogin
                ? localStorage.setItem('token', res.token)
                : sessionStorage.setItem('token', res.token);
              history.push('/');
            } else {
              history.push({
                pathname: '/signup',
                props: res,
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
    <Button href={KAKAO_AUTH_URL}>
      <button onClick={kakaoLoginClickHandler}>
        <img
          src="https://cdn.dailyhotel.com/ux/login-ic-sns-kakao.svg"
          alt="kakao"
        />
        카카오로 시작하기
      </button>
    </Button>
  );
}

export default KakaoLogin;

const Button = styled.div`
  button {
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

    img {
      position: absolute;
      left: 15px;
      height: 20px;
      margin-top: -2px;
    }
  }
`;
