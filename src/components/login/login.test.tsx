import { render, screen } from '@testing-library/react';
import LoginForm from './login';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(), // Simula a função `push` do roteador
  });
};

describe('LoginForm component', () => {
  beforeEach(() => {
    mockRouter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly the login elements', () => {
    render(<LoginForm />);

    // Verifica se os inputs estão no documento
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();

    // Verifica se não há mensagens de erro ou sucesso inicialmente
    expect(screen.queryByText(/😥/)).not.toBeInTheDocument(); // Mensagem de erro
    expect(screen.queryByText(/🤩/)).not.toBeInTheDocument(); // Mensagem de sucesso

    // Verifica se o Spinner não está visível
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
