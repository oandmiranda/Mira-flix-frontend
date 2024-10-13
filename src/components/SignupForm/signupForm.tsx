import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { register as registerUser } from '@src/services/signup';
import { useState } from 'react';
import { Container, LogoText } from '../Login/style';
import Text from '../Text/text';
import Button from '../Button/button';
import theme from '@src/styles/themes';
import Box from '@src/shared/Box/box';
import Logo from '../Logo/Logo';
import { errorStyle } from '@src/styles/errorStyle';
import { successStyle } from '@src/styles/successStyle';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Função para manipular o envio do formulário
  const onSubmit = async (data) => {
    setError('');
    setSuccessMessage('');

    try {
      // Faz o registro do usuário
      const response = await registerUser(data.name, data.email, data.password);

      if (response && response.status === 201) {
        setSuccessMessage('Usuário cadastrado com sucesso!');

        // Limpa o formulário após sucesso
        reset();

        // Redireciona para a página de login após um intervalo
        setTimeout(() => {
          router.push('/login');
        }, 2200);
      } else {
        throw new Error(response.message || 'Erro ao tentar cadastrar usuário');
      }
    } catch (error) {
      setError(error.message || 'Erro ao tentar cadastrar usuário');
    }
  };

  // Senha para comparação no campo de confirmação
  const password = watch('password');

  return (
    <Box tag="div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <LogoText>MiraFlix</LogoText>
          <Text tag="h2" styleSheet={{ marginBottom: '10px', marginTop: '25px' }}>
            Cadastrar
          </Text>
          <Text tag="p" styleSheet={{ marginBottom: '13px', fontSize: theme.sizes.paragraph.mobileS }}>
            Digite dados válidos
          </Text>
          <input
            type="text"
            {...register('name', {
              required: 'O nome é obrigatório.',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Utilize apenas letras e espaços.',
              },
            })}
            placeholder="Nome"
          />
          {errors.name && <Text styleSheet={errorStyle}>{errors.name.message}</Text>}

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
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message:
                  'A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, números e símbolos.',
              },
            })}
            placeholder="Senha"
          />
          {errors.password && <Text styleSheet={errorStyle}>{errors.password.message}</Text>}

          <input
            type="password"
            {...register('confirmPassword', {
              required: 'A confirmação de senha é obrigatória.',
              validate: (value) => value === password || 'As senhas não coincidem.',
            })}
            placeholder="Confirmar senha"
          />
          {errors.confirmPassword && <Text styleSheet={errorStyle}>{errors.confirmPassword.message}</Text>}

          <Button type="submit" width="270px" background={theme.colors.background.button}>
            Cadastrar
          </Button>
          {/* Exibe mensagens de erro ou sucesso */}
          {error && <Text styleSheet={errorStyle}>{error}</Text>}
          {successMessage && <Text styleSheet={successStyle}>{successMessage}</Text>}
        </Container>
      </form>
    </Box>
  );
}
