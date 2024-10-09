import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { login } from '@src/services/auth';
import { Container } from './style';
import Box from '@src/shared/Box/box';
import Button from '../Button/button';
import Text from '../Text/text';
import theme from '@src/styles/themes';

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
      setSuccessMessage(`Bem vindo ${response.name} 🤩`);
      router.push('/home'); // Redireciona para a página home após login bem-sucedido
    } catch (error) {
      setError(error.message); // Define o erro recebido da resposta
    }
  };

  return (
    <Box tag="div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Text tag="h1" styleSheet={{ marginBottom: '10px' }}>
            Entrar
          </Text>
          <Text tag="h4" styleSheet={{ marginBottom: '10px' }}>
            Digite o endereço de e-mail e a senha da sua conta MiraFlix
          </Text>
          <input
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
          {errors.email && <Text styleSheet={{ color: 'red', padding: '10px 0' }}>{errors.email.message}</Text>}

          <input
            type="password"
            {...register('password', {
              required: 'A senha é obrigatória.',
            })}
            placeholder="Senha"
          />
          {errors.password && (
            <Text styleSheet={{ color: 'red', padding: '10px 0' }}>{errors.password.message}</Text>
          )}

          <Button type="submit" width="210px" background={theme.colors.background.button}>
            Login
          </Button>
          {successMessage && (
            <Text
              styleSheet={{
                color: theme.colors.background.button,
                fontSize: '20px',
                fontWeight: '700',
                marginTop: '10px',
              }}
            >
              {successMessage}
            </Text>
          )}
          {error && <Text styleSheet={{ color: 'red', padding: '10px 0' }}>{error + '😥'}</Text>}
        </Container>
      </form>

      {/* Exibe mensagens de sucesso ou erro */}
    </Box>
  );
}
