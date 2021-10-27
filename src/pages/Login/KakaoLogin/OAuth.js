const CLIENT_ID = '2b9b36eb27dba5d2c3b3aaf0a00e976d';
const REDIRECT_URI = 'http://localhost:3000/oauth';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default KAKAO_AUTH_URL;
