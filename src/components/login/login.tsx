import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { login } from '@src/services/auth';
import Box from '@src/shared/Box/box';
import { Container } from './style';
import Input from '../Navbar/Input/Input';
import Button from '../Button/button';
import Text from '../Text/text';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Função para manipular o envio do formulário
  const onSubmit = async (data) => {
    setError(''); // Limpa os erros anteriores
    setSuccessMessage('');

    try {
      const response = await login(data.email, data.password);
      setSuccessMessage(`Olá ${response.name} 🤩`);
      router.push('/home'); // Redireciona para a página home após login bem-sucedido
    } catch (error) {
      setError(error.message); // Define o erro recebido da resposta
    }
  };

  return (
    <Box tag="div">
      <Text tag="h2">Login</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Input
            type="email"
            {...register('email', {
              required: 'O email é obrigatório.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Por favor, insira um email válido.',
              },
            })}
            placeholder="Email"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

          <Input
            type="password"
            {...register('password', {
              required: 'A senha é obrigatória.',
            })}
            placeholder="Senha"
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

          <Button type="submit">Login</Button>
        </Container>
      </form>

      {/* Exibe mensagens de sucesso ou erro */}
      {successMessage && <p>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Box>
  );
}
