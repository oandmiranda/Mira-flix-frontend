import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; // Você pode usar axios ou fetch

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const route = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpa os erros
    setSuccessMessage(''); // Limpa a mensagem de sucesso

    try {
      // Faz a requisição POST para o backend
      const response = await axios.post('/cadastro', {
        name,
        email,
        password,
      });

      // Se o cadastro for bem-sucedido
      setSuccessMessage('Usuário cadastrado com sucesso!');
      console.log('Cadastro bem-sucedido', response.data);
      router.push('/login');
    } catch (err) {
      // Se ocorrer um erro
      setError('Erro ao cadastrar usuário: ' + err.response.data.message);
      console.error('Erro ao cadastrar usuário', err);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nome" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Senha"
        />
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}
