import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { login } from '@src/services/auth';
import Box from '@src/shared/Box/box';
import Button from '../Button/button';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import Logo from '../Logo/Logo';
import { errorStyle } from '@src/styles/errorStyle';
import { successStyle } from '@src/styles/successStyle';
import { LoginFormData } from '@src/types/interfaces';
import { Container } from '@src/components/login/style';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Função para manipular o envio do formulário
  const onSubmit = async (data: LoginFormData) => {
    setError(''); // Limpa os erros anteriores
    setSuccessMessage('');

    try {
      const response = await login(data.email, data.password);
      setSuccessMessage(`Bem vindo ${response.name} 🤩`);
      router.push('/home'); // Redireciona para a página home após login bem-sucedido
    } catch (error: any) {
      setError(error.message); // Define o erro recebido da resposta
    }
  };

  return (
    <Box tag="div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo noLink styleSheet={{ marginBottom: '20px' }} />
          <Text tag="h3" styleSheet={{ marginBottom: '6px' }}>
            Entrar
          </Text>
          <Text tag="p" styleSheet={{ marginBottom: '13px', fontSize: theme.sizes.paragraph.mobileS }}>
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
          {errors.email && <Text styleSheet={errorStyle}>{errors.email.message}</Text>}

          <input
            type="password"
            {...register('password', {
              required: 'A senha é obrigatória.',
            })}
            placeholder="Senha"
          />
          {errors.password && <Text styleSheet={errorStyle}>{errors.password.message}</Text>}

          <Button type="submit" width="270px" background={theme.colors.background.button} backgroundHover>
            Login
          </Button>
          {error && <Text styleSheet={errorStyle}>{error + '😥'}</Text>}
          {successMessage && <Text styleSheet={successStyle}>{successMessage}</Text>}
        </Container>
      </form>
    </Box>
  );
}
