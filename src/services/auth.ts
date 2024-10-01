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

    // Log para verificar a resposta
    console.log('Response do login:', data);

    if (response.ok) {
      setToken(data.token); // Salva o token no localStorage
      return data; // retorna dados sobre o usuário
    } else {
      // Captura e lança o erro com a mensagem do back-end
      throw new Error(data.message || 'Erro no login');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.message); // Loga a mensagem do erro
    throw error; // Propaga o erro para o componente chamar setError
  }
};
