import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import SignupForm from './Components/SignupForm';
import { autoHypenBirthday, validation } from './utils';
import styled from 'styled-components';

function Signup({ location }) {
  const history = useHistory();
  const userInfo = location.props;
  console.log(userInfo);
  const [inputs, setInputs] = useState({
    name: userInfo ? userInfo.nickname : '',
    phoneNumber: '',
    birthday: '',
  });

  const [inputValidated, setInputValidated] = useState({
    name: false,
    phoneNumber: false,
    birthday: false,
  });

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
    const nameWithOnlyKorean = value.replace(validation.notKorean, '');
    setInputs({
      ...inputs,
      name: nameWithOnlyKorean,
    });
  };

  const phoneNumberChangeHandler = e => {
    const { value } = e.target;
    const numberOnly = value.replace(validation.number, '');
    setInputs({
      ...inputs,
      phoneNumber: numberOnly,
    });
  };

  useEffect(() => {
    setInputValidated({
      ...inputValidated,
      name: validation.name.test(inputs.name),
      phoneNumber: validation.phoneNumber.test(inputs.phoneNumber),
      birthday: validation.birthday.test(inputs.birthday),
    });
  }, [inputs]);

  const signupButtonClickHandler = e => {
    const input = { ...inputs, ...userInfo };
    console.log(JSON.stringify(input));
    e.preventDefault();
    if (Object.values(inputValidated).every(v => v)) {
      fetch('http://localhost:8000/user/signup', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(input),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('token', data.token);
          console.log(data.userInfo);
          localStorage.setItem('user', JSON.stringify(data.userInfo));
          alert(`${data.userInfo.nickname}님 환영합니다.`);
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
          description={
            !inputValidated.name && '2-4자의 한글 이름을 입력해주세요'
          }
          onChange={nameChangeHandler}
        />
        <SignupForm
          title="BIRTHDAY"
          name="birthday"
          type="text"
          value={birthday}
          description={
            !inputValidated.birthday && 'YYYYMMDD 생일을 입력해주세요'
          }
          onChange={birthdayChangeHandler}
        />
        <SignupForm
          title="PHONE NUMBER"
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          description={
            !inputValidated.phoneNumber && '휴대폰 번호을 입력해주세요( - 제외)'
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
  padding: 60px 0px 30px;
`;

const Description = styled.p`
  padding: 40px 0px 15px;
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
