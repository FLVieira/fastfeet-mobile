import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:3001/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default api;
