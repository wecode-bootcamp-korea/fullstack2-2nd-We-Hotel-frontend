import React, { useState } from 'react';
import { Checkbox } from '@styled-icons/boxicons-regular/Checkbox';
import { CheckboxChecked } from '@styled-icons/boxicons-solid/CheckboxChecked';
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
      <LoginWrapper>
        <Description>
          잊지 못할 하루가
          <br />
          바로 여기서 시작됩니다
        </Description>
        <SubDescription>
          멋진 숙소를 특별한 가격으로! <br /> 위호텔에서 여행을 시작하세요.
        </SubDescription>

        <KakaoLogin maintainLogin={maintainLogin} />
        <CheckboxWrapper>
          <CheckBox>
            <label>
              <CheckboxInput
                type="checkbox"
                checked={maintainLogin}
                onChange={e => checkHandler(e)}
              />
              {maintainLogin ? <CheckedIcon /> : <CheckboxIcon />}
            </label>
          </CheckBox>
          <MaintainLoginTitle>로그인 유지</MaintainLoginTitle>
        </CheckboxWrapper>
      </LoginWrapper>
    </>
  );
}

export default Login;

const LoginWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 150px 20px;
`;

const Description = styled.h3`
  margin: 0 0 1em;
  color: #111;
  font-size: 25px;
  font-weight: 100;
  letter-spacing: -3px;
  line-height: 1.4em;
`;

const SubDescription = styled.p`
  color: #4d4d4d;
  margin: 13px 0 150px;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: -0.9px;
  line-height: 1.4em;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  margin-top: 15px;
`;

const CheckBox = styled.div`
  align-items: center;
  position: relative;
  min-width: 17px;
  height: 25px;
  min-height: 17px;
  font-size: 1em;
  line-height: 17px;
`;

const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 17px;
  height: 17px;
  cursor: pointer;
  z-index: 3;
`;

const MaintainLoginTitle = styled.span`
  position: absolute;
  top: 6px;
  left: 25px;
  width: 100px;
  color: #888;
  font-size: 13px;
`;

const CheckboxIcon = styled(Checkbox)`
  color: #6e2c9b;
  width: 22px;
`;

const CheckedIcon = styled(CheckboxChecked)`
  color: #6e2c9b;
  width: 22px;
`;
