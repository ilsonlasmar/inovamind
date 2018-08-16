import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

api.interceptors.request.use(async (config) => {
  config.headers.Accept = 'application/vnd.inovamind.v1';
  const jwt = await localStorage.getItem('jwt');
  config.headers.Authorization = `Bearer ${jwt}`;
  return config;
})

export default api;