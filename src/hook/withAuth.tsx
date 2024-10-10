import { useRouter } from 'next/router';
import { useEffect, FC } from 'react';
import api from '@src/services/axios'; // Importa a instância configurada do axios.ts
import { getToken } from '@src/utils/token';

const withAuth = (WrappedComponent: FC) => {
  const AuthComponent: FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = getToken();

      if (!token) {
        alert('Acesso não autorizado. Por favor, faça login novamente.');
        router.push('/login');
        return;
      }

      // Usando a instância do axios configurada
      api
        .post('/users/verify_token') // Não precisa da URL completa, pois já foi definida no axios.ts
        .then((response) => {
          console.log('Token válido:', response.data);
        })
        .catch((error) => {
          console.error('Erro na verificação do token:', error);

          if (error.response) {
            console.error('Resposta do servidor:', error.response.data);
            console.error('Status do erro:', error.response.status);
          }

          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            router.push('/login');
          }
        });
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
