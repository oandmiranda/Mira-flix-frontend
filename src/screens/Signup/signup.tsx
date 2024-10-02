import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { register as registerUser } from '@src/services/signup';
import { useState } from 'react';

export default function Signup() {
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
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

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
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <input
          type="password"
          {...register('password', {
            required: 'A senha é obrigatória.',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
              message: 'A senha deve ter no mínimo 8 caracteres, com letras maiúsculas, números e símbolos.',
            },
          })}
          placeholder="Senha"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

        <input
          type="password"
          {...register('confirmPassword', {
            required: 'A confirmação de senha é obrigatória.',
            validate: (value) => value === password || 'As senhas não coincidem.',
          })}
          placeholder="Confirmar senha"
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}

        <button type="submit">Cadastrar</button>
      </form>

      {/* Exibe mensagens de erro ou sucesso */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}
