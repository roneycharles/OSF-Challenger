import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com/',
  baseURL: 'https://osf-application.herokuapp.com/',
});

export default api;
