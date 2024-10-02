import axios from 'axios';

// Configurando o axios com o interceptador para incluir o token em todas as requisições
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Interceptor para adicionar o token nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Pegue o token do localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Adiciona o token no cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
