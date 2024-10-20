export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await fetch('https://mira-flix-backend.onrender.com/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    // Log para verificar a resposta
    console.log('Response do login:', response, data);

    if (response.ok) {
      return data;
    } else {
      // Captura e lança o erro com a mensagem do back-end
      throw new Error(data.message || 'Erro ao cadastrar');
    }
  } catch (error: any) {
    console.error('Erro ao registrar usuário', error.message); // Loga a mensagem do erro
    throw error; // Propaga o erro para o componente chamar setError
  }
};
