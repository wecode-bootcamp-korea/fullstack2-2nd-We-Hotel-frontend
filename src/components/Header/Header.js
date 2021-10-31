import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ShortPath from './ShortPath';
import styled from 'styled-components';

function Header({ page }) {
  const [barClicked, setBarClicked] = useState(false);
  const barIconHandler = () => {
    setBarClicked(!barClicked);
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo>WEHOTEL</Logo>
      </Link>
      {page !== 'main' && <Page>{page}</Page>}
      <Icons>
        <Link to="search">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Link>
        <FontAwesomeIcon icon={faBars} size="lg" onClick={barIconHandler} />
      </Icons>
      {barClicked && (
        <ShortPath setBarClicked={setBarClicked} barClicked={barClicked} />
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid rgb(240, 240, 240);
  z-index: 10;
  a {
    color: black;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
  }
`;

const Page = styled.div`
  padding: 10px 30px 10px 20px;
  margin-top: 2px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

const Logo = styled.div`
  display: block;
  margin-top: 2px;
  line-height: 44px;
  font-size: 18px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55px;
  cursor: pointer;
`;
