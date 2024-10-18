// token.ts será responsável por armazenar e manipular o token no localStorage.

// Armazenar o token no local storage
export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

// Buscar o token armazenado no localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Remover o token do localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};
