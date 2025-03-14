import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { login } from '@src/services/auth';
import Box from '@src/shared/Box/box';
import theme from '@src/styles/themes';
import { errorStyle } from '@src/styles/errorStyle';
import { successStyle } from '@src/styles/successStyle';
import { LoginFormData } from '@src/types/interfaces';
import { IoLogIn } from 'react-icons/io5';
import { AuthContainer, Spinner } from '@src/components/AuthStyles/AuthStyles';
import Logo from '@src/components/Logo/Logo';
import Text from '@src/components/Text/text';
import Button from '@src/components/Button/button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Novo estado
  const router = useRouter();

  // Função para manipular o envio do formulário
  const onSubmit = async (data: LoginFormData) => {
    setError('');
    setSuccessMessage('');
    setLoading(true); // Inicia o estado de carregamento

    try {
      const response = await login(data.email, data.password);
      setSuccessMessage(`Bem vindo ${response.name} 🤩`);
      router.push('/home');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false); // Encerra o carregamento após a requisição
    }
  };

  return (
    <Box tag="div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthContainer>
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

          {!loading && (
            <Button
              type="button"
              width="270px"
              background={theme.colors.background.button}
              disabled={loading}
              onClick={handleSubmit(onSubmit)}
              backgroundhover={true}
            >
              Login
              <IoLogIn size={18} />
            </Button>
          )}

          {loading && (
            <Button
              type="button"
              width="270px"
              background={theme.colors.background.button}
              disabled={loading}
              backgroundhover={true}
            >
              Verificando...
            </Button>
          )}

          {/* Spinner é exibido quando loading for true */}
          {loading && <Spinner />}
          {error && <Text styleSheet={errorStyle}>{error + '😥'}</Text>}
          {successMessage && <Text styleSheet={successStyle}>{successMessage}</Text>}
        </AuthContainer>
      </form>
    </Box>
  );
}
