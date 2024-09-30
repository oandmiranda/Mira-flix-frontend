import { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '@src/services/signup';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpa os erros anteriores
    setSuccessMessage(''); // Limpa a mensagem de sucesso anterior

    try {
      // Faz o registro do usuário
      const response = await register(name, email, password);

      // Verifica se o back-end retornou um status de sucesso
      if (response && response.status === 201) {
        setSuccessMessage('Usuário cadastrado com sucesso!');

        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPassword('');

        // Redireciona para a página de login após um curto intervalo
        setTimeout(() => {
          router.push('/login');
        }, 2500);
      } else {
        // Caso o status não seja 201, lança um erro
        throw new Error(response.message || 'Erro ao tentar cadastrar usuário');
      }
    } catch (error) {
      // Define a mensagem de erro com base na resposta do back-end
      setError(error.message || 'Erro ao tentar cadastrar usuário');
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
      {/* Exibe mensagens de erro ou sucesso */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}
