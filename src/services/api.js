import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-growdevers-swagger.herokuapp.com',
});

export default api;
