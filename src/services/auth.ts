import { setToken } from '@src/utils/token';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('http://mira-flix-backend-production.up.railway.app/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setToken(data.token); // Salva o token no localStorage
      return data; // retorna dados sobre o usuário
    } else {
      // Captura e lança o erro com a mensagem do back-end
      throw new Error(data.message || 'Erro no login');
    }
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.message); // Loga a mensagem do erro
    throw error; // Propaga o erro para o componente chamar setError
  }
};
