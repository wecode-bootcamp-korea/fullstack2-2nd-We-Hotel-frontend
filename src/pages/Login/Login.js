import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import KakaoLogin from './KakaoLogin/KakaoLogin';
import styled from 'styled-components';

function Login() {
  const [maintainLogin, setMaintainLogin] = useState(true);
  const checkHandler = () => {
    setMaintainLogin(!maintainLogin);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          <h3>
            잊지 못할 하루가
            <br />
            바로 여기서 시작됩니다
          </h3>
          <p>
            멋진 숙소를 특별한 가격으로! <br /> 위호텔에서 여행을 시작하세요.
          </p>
        </Title>
        <KakaoLogin maintainLogin={maintainLogin} />
        <Checkbox>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={maintainLogin}
                onChange={e => checkHandler(e)}
              />
              <FontAwesomeIcon
                icon={maintainLogin ? faCheckSquare : faSquare}
                size="lg"
                className="checkboxIcon"
              />
            </label>
          </div>
          <span>로그인 유지</span>
        </Checkbox>
      </Wrapper>
    </>
  );
}

export default Login;

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 150px 20px;
`;

const Title = styled.div`
  h3 {
    margin: 0 0 1em;
    color: #111;
    font-size: 25px;
    font-weight: 100;
    letter-spacing: -3px;
    line-height: 1.4em;
  }

  p {
    color: #4d4d4d;
    margin: 13px 0 150px;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: -0.9px;
    line-height: 1.4em;
  }
`;

const Checkbox = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 15px;

  .checkbox {
    display: inline-block;
    align-items: center;
    position: relative;
    min-width: 17px;
    height: 25px;
    min-height: 17px;
    font-size: 1em;
    line-height: 17px;

    label {
      padding-left: 5px;
      font-size: 14px;

      .checkboxIcon {
        color: #6e2c9b;
      }
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 17px;
      height: 17px;
      cursor: pointer;
      z-index: 3;
    }
  }
  span {
    position: absolute;
    top: 5px;
    left: 32px;
    width: 100px;
    color: #888;
    font-size: 13px;
  }
`;
