import { useState } from 'react';
import { login } from '@src/services/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpa os erros

    try {
      const userData = await login(email, password); // Chama a função de login
      console.log('Login bem-sucedido', userData);
      // Redirecionar ou fazer outra ação após login bem-sucedido
    } catch (err) {
      setError('Credenciais inválidas'); // Mostra erro na tela
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="senha"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
