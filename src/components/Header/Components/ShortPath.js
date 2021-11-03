import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Close } from '@styled-icons/evil/Close';
import { pathButtons } from '../utils';
import ShortPathList from './ShortPathList';
import styled from 'styled-components';

function ShortPath({ setBarClicked, barClicked }) {
  const history = useHistory();
  const isUser = localStorage.getItem('token');
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isUser) {
      fetch('/user')
        .then(res => res.json)
        .then(res => setUser(res.user));
    }
  }, [isUser]);

  const pathClickHandler = path => {
    if (isUser) {
      history.push(path);
    } else {
      alert('로그인 후 이용이 가능한 서비스입니다.');
      history.push('/login');
    }
  };

  return (
    <Wrapper>
      <ShortPathWrapper>
        <Login>
          <div className="top">
            <CloseIcon onClick={() => setBarClicked(!barClicked)} />
            <UserInfo>
              <UserInfoMain>
                {isUser ? user.nickname : '로그인 해주세요'}
              </UserInfoMain>
              <UserInfoSub>
                {isUser
                  ? user.email
                  : '위호텔 회원가입하시고 다양한 혜택을 누리세요'}
              </UserInfoSub>
            </UserInfo>
            <Link to={isUser ? '/mydaily' : '/login'}>
              <ButtonWrapper>
                <Button>{isUser ? '내 정보수정' : '로그인'}</Button>
              </ButtonWrapper>
            </Link>
          </div>
        </Login>
        <Path>
          <PathList>
            {pathButtons.map((data, id) => {
              return (
                <ShortPathList
                  isUser={isUser}
                  pathClickHandler={pathClickHandler}
                  key={id}
                  data={data}
                />
              );
            })}
          </PathList>
        </Path>
      </ShortPathWrapper>
    </Wrapper>
  );
}

export default ShortPath;

const Wrapper = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  max-width: 768px;
  padding: 0px 0px 8px;
  background-color: white;
  border: 1px solid rgb(231, 231, 231);
  z-index: 9999;
`;

const ShortPathWrapper = styled.div`
  width: 320px;
`;

const Login = styled.div`
  position: relative;
`;

const UserInfoMain = styled.div`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

const UserInfoSub = styled.div`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: rgb(77, 77, 77);
`;

const UserInfo = styled.p`
  padding: 16px 16px 12px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 95%;
  margin: 0 auto;
  padding: 8px 16px;
  border: none;
  color: white;
  background-color: #6e2c9b;
  font-size: 0.9em;
  line-height: 1.43em;
  text-align: center;
  cursor: pointer;
`;

const Path = styled.div`
  padding: 0px 16px;
`;

const PathList = styled.ul`
  margin: 20px 10px;
`;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 8px;
  left: auto;
  right: 8px;
  width: 20px;
  height: 20px;
  color: rgb(77, 77, 77);
`;
