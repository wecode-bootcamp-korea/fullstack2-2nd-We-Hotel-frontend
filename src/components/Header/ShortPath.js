import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
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
            <FontAwesomeIcon
              className="closeIcon"
              icon={faTimes}
              onClick={() => setBarClicked(!barClicked)}
            />
            <p>
              <div className="main">
                {isUser ? user.nickname : '로그인 해주세요'}
              </div>
              <div className="sub">
                {isUser
                  ? user.email
                  : '위호텔 회원가입하시고 다양한 혜택을 누리세요'}
              </div>
            </p>
            <Button>
              <Link to={isUser ? '/mydaily' : '/login'}>
                <button>{isUser ? '내 정보수정' : '로그인'}</button>
              </Link>
            </Button>
          </div>
        </Login>
        <Path>
          <ul>
            <li onClick={() => pathClickHandler('/reservations')}>
              <FontAwesomeIcon icon={faListAlt} className="pathIcon" />
              <p>예약/구매내역</p>
            </li>
            <li onClick={() => pathClickHandler('/likes')}>
              <FontAwesomeIcon icon={faHeart} className="pathIcon" />
              <p>위시리스트</p>
            </li>
            <li onClick={() => pathClickHandler('/mydaily')}>
              <FontAwesomeIcon icon={faUser} className="pathIcon" />
              <p>마이데일리</p>
            </li>
            <li onClick={() => pathClickHandler('/current')}>
              <FontAwesomeIcon icon={faClock} className="pathIcon" />
              <p>최근 본 상품</p>
            </li>
          </ul>
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
  margin: 0 auto;
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
  width: 320 px;

  .top {
    .closeIcon {
      position: absolute;
      top: 8px;
      left: auto;
      right: 8px;
      width: 20px;
      height: 20px;
      color: rgb(77, 77, 77);
    }

    p {
      padding: 16px 16px 12px;

      .main {
        margin-bottom: 2px;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
      }

      .sub {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: -0.2px;
        color: rgb(77, 77, 77);
      }
    }
  }
`;

const Button = styled.div`
  margin-bottom: 16px;
  padding: 0px 16px;

  button {
    display: block;
    width: 100%;
    margin: 1px;
    padding: 8px;
    border: none;
    color: white;
    background-color: #6e2c9b;
    font-size: 0.9em;
    line-height: 1.43em;
    text-align: center;
    cursor: pointer;
  }
`;

const Path = styled.div`
  padding: 0px 16px;

  ul {
    margin: 20px 10px;
  }

  li {
    display: flex;
    float: left;
    position: relative;
    width: 50%;
    height: 32px;
    margin: 5px 0px 0px;
    padding: 0px 0px 0px 25px;
    cursor: pointer;

    .pathIcon {
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 18px;
      height: 18px;
    }

    p {
      display: block;
      font-size: 1em;
      line-height: 22px;
    }
  }
`;
