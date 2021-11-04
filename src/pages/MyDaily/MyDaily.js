import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import UserPage from './components/UserPage';
import NotUserPage from './components/NotUserPage';
import styled from 'styled-components';

function MyDaily() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [userInfo] = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch('http://localhost:3000/data/MyDaily/MYDAILY.json')
      .then(res => res.json())
      .then(res => setData(res.mydaily));

    setUser(userInfo);
  }, []);

  const token = localStorage.getItem('token');

  return (
    <>
      <Header page={'마이데일리'} />
      <MainMyDaily>
        {token ? (
          data.map((element, id) => {
            return <UserPage key={id} data={element} user={user} />;
          })
        ) : (
          <NotUserPage />
        )}
      </MainMyDaily>
    </>
  );
}

export default MyDaily;

const MainMyDaily = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
