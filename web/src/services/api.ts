import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com/',
  baseURL: 'https://backend-osf.herokuapp.com/',
  // baseURL: 'http://localhost:8080/',
});

export default api;
