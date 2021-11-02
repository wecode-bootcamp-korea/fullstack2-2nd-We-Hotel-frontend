import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import SignupForm from './Components/SignupForm';
import { autoHypenBirthday } from './utils';
import styled from 'styled-components';

function Signup({ location }) {
  const history = useHistory();

  // const res = location.props;
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    birthday: '',
  });
  const [isNameValid, setIsNameValid] = useState(false);
  const [isBirthdayValid, setIsBirthdayValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const { name, phoneNumber, birthday } = inputs;

  const birthdayChangeHandler = e => {
    const { value } = e.target;
    let birthdayWithHypen = autoHypenBirthday(value);
    setInputs({
      ...inputs,
      birthday: birthdayWithHypen,
    });
  };

  const nameChangeHandler = e => {
    const { value } = e.target;
    const notKorean = /[a-z0-9]|[[\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g;
    const nameWithOnlyKorean = value.replace(notKorean, '');
    setInputs({
      ...inputs,
      name: nameWithOnlyKorean,
    });
  };

  const phoneNumberChangeHandler = e => {
    const { value } = e.target;
    const numberOnly = value.replace(/[^0-9]/g, '');
    setInputs({
      ...inputs,
      phoneNumber: numberOnly,
    });
  };

  const validation = {
    name: /^[가-힣]{2,4}$/,
    phoneNumber: /^[0-9\b -]{11}$/,
    birthday:
      /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
  };

  useEffect(() => {
    validation.name.exec(inputs.name)
      ? setIsNameValid(true)
      : setIsNameValid(false);
    validation.phoneNumber.exec(inputs.phoneNumber)
      ? setIsPhoneNumberValid(true)
      : setIsPhoneNumberValid(false);
    validation.birthday.exec(inputs.birthday)
      ? setIsBirthdayValid(true)
      : setIsBirthdayValid(false);
  }, [inputs]);

  const signupButtonClickHandler = e => {
    e.preventDefault();
    if (isNameValid && isBirthdayValid && isPhoneNumberValid) {
      fetch('/user/information', {
        method: 'POST',
        body: JSON.stringify({ ...inputs }),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('token', data.token);
          alert(`님 환영합니다.`);
          history.push('/');
        });
    } else {
      alert('모든 정보를 형식에 맞게 입력해주세요.');
    }
  };

  return (
    <Wrapper>
      <SignupHeader>
        <HeaderTitle>회원 가입</HeaderTitle>
      </SignupHeader>
      <SignupWrapper>
        <DescriptionWrapper>
          <Description>
            위호텔 회원이 되시면
            <br />
            다양한 혜택을 드립니다.
          </Description>
        </DescriptionWrapper>
        <SignupForm
          title="NAME"
          name="name"
          type="text"
          value={name}
          description={!isNameValid && '2-4자의 한글 이름을 입력해주세요'}
          onChange={nameChangeHandler}
        />
        <SignupForm
          title="BIRTHDAY"
          name="birthday"
          type="text"
          value={birthday}
          description={!isBirthdayValid && 'YYYYMMDD 생일을 입력해주세요'}
          onChange={birthdayChangeHandler}
        />
        <SignupForm
          title="PHONE NUMBER"
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          description={
            !isPhoneNumberValid && '휴대폰 번호을 입력해주세요( - 제외)'
          }
          onChange={phoneNumberChangeHandler}
        />
        <Submit onClick={signupButtonClickHandler} type="submit">
          회원 가입
        </Submit>
      </SignupWrapper>
    </Wrapper>
  );
}

export default Signup;

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const SignupHeader = styled.div`
  position: absolute;
  max-width: 768px;
  margin: 0 auto;
  border-bottom: 1px solid #dcdcdd;
  inset: 0px;
  height: 45px;
  padding: 11px 96px;
  text-align: center;
`;

const HeaderTitle = styled.div`
  color: rgb(77, 77, 77);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const SignupWrapper = styled.div`
  padding: 0 20px;
`;

const DescriptionWrapper = styled.div`
  padding: 70px 0px 30px;
`;

const Description = styled.p`
  padding: 45px 0px;
  color: rgb(17, 17, 17);
  line-height: 1.4em;
  font-size: 25px;
  font-weight: 100;
  letter-spacing: -3px;
`;

const Submit = styled.button`
  width: 100%;
  margin: 40px 0;
  padding: 12px 22px;
  color: #fff;
  background-color: #6e2c9b;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1em;
  text-align: center;
  cursor: pointer;
`;
