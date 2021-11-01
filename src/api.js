const host = process.env.REACT_APP_API_ENDPOINT || 'localhost';
const port = 8000;

const API_ENDPOINT = `http://${host}:${port}`;

export { API_ENDPOINT };
