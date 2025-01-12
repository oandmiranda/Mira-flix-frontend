import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import Input from './Input'; // ajuste o caminho conforme necessário

// Mock do useRouter para simular o next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Função utilitária para configurar o mock do useRouter para todos os testes
const mockRouter = () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(), // Simula a função `push` do roteador
  });
};

describe('Input Component', () => {
  beforeEach(() => {
    mockRouter(); // Configura o mock do roteador antes de cada teste
  });

  it('should render the component on the screen', () => {
    render(<Input placeholder="Busque por filmes ou séries" />);

    const inputElement = screen.getByPlaceholderText('Busque por filmes ou séries');
    expect(inputElement).toBeInTheDocument(); // Verifica se o input está presente no DOM
  });

  it('should ensure the input is empty when rendered', () => {
    render(<Input placeholder="Busque por filmes ou séries" />);

    const inputElement = screen.getByPlaceholderText('Busque por filmes ou séries');
    expect(inputElement).toHaveValue(''); // Garante que o input está vazio
  });
});
