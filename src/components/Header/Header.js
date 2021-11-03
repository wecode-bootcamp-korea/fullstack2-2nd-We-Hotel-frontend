import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@styled-icons/bootstrap/Search';
import { Menu3 } from '@styled-icons/remix-line/Menu3';
import ShortPath from './Components/ShortPath';
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
          <SearchIcon />
        </Link>
        <BarIcon onClick={barIconHandler} />
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
`;

const Page = styled.div`
  padding: 10px 50px 10px 10px;
  margin-top: 2px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;

const Logo = styled.div`
  margin-top: 4px;
  color: #474747;
  line-height: 44px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 20px;
`;

const BarIcon = styled(Menu3)`
  width: 24px;
`;
