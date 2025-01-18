import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import SignupForm from './signupForm';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(), // Simula a função `push` do roteador
  });
};

describe('SignupForm component', () => {
  beforeEach(() => {
    mockRouter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly the signup elements', () => {
    render(<SignupForm />);

    // Verifica se os inputs estão no documento
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar senha')).toBeInTheDocument();

    // check if the button is in the document
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();

    // Verifica se o Spinner não está visível
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
