// Arquivo responsável pela autenticação (login, logout)
// auth.js será responsável por fazer as requisições de login e logout.
// services/auth.js
import { setToken } from '@src/utils/token';

export const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setToken(data.token); // Salva o token no localStorage
      return data; // Retorna os dados do usuário, se necessário
    } else {
      throw new Error(data.message || 'Erro no login');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
