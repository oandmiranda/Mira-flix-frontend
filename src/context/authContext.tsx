import { createContext, useContext, useState, useEffect } from 'react';
import { setToken, getToken, removeToken } from '@src/utils/token'; // Funções para manipular o token
import { useRouter } from 'next/router'; // Para redirecionar

// Cria o contexto
const AuthContext = createContext(null);

// Hook para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setAuthToken] = useState<string | null>(null);
  const router = useRouter();

  // Efeito para carregar o token do localStorage quando o app inicializa
  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  // Função de login para armazenar o token
  const login = (newToken: string) => {
    setAuthToken(newToken);
    setToken(newToken);
  };

  // Função de logout para limpar o token
  const logout = () => {
    setAuthToken(null);
    removeToken();
    router.push('/login'); // Redireciona para a página de login
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};
