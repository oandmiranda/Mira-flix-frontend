import { render, screen } from '@testing-library/react';
import LoginForm from '.';
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

    // check if the inputs are in the document
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();

    // check if there are no error or success messages initially.

    expect(screen.queryByText(/😥/)).not.toBeInTheDocument(); // Mensagem de erro
    expect(screen.queryByText(/🤩/)).not.toBeInTheDocument(); // Mensagem de sucesso

    // check if the button is in the document
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();

    // check if the Spinner is not visible.

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
