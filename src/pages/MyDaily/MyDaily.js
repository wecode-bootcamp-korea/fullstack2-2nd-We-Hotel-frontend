import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';
import NotUserPage from './components/NotUserPage';

function MyDaily() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/MyDaily/MYDAILY.json')
      .then(res => res.json())
      .then(res => setData(res.mydaily));
  }, []);

  const token = localStorage.getItem('token');

  return (
    <>
      {token ? (
        data.map((element, id) => {
          return <UserPage key={id} data={element} />;
        })
      ) : (
        <NotUserPage />
      )}
    </>
  );
}

export default MyDaily;
