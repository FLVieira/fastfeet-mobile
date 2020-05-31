import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:3001/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
