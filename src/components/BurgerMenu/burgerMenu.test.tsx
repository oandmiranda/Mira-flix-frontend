import { render, screen } from '@testing-library/react';
import BurgerMenu from './burgerMenu';
import { useRouter } from 'next/router';

// Mock do useRouter para simular o next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(), // Simula a função `push` do roteador
  });
};

describe('BurgerMenu component', () => {
  beforeEach(() => {
    mockRouter(); // Configura o mock do roteador antes de cada teste
  });

  it('should render the menu when isOpen is true', () => {
    render(<BurgerMenu isOpen={true} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render all menu links with correct text', () => {
    render(<BurgerMenu isOpen={true} />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Originais Netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/Recomendados para você/i)).toBeInTheDocument();
    expect(screen.getByText(/Em alta/i)).toBeInTheDocument();
    expect(screen.getByText(/Séries/i)).toBeInTheDocument();
    expect(screen.getByText(/Ação/i)).toBeInTheDocument();
    expect(screen.getByText(/Comédia/i)).toBeInTheDocument();
    expect(screen.getByText(/Terror/i)).toBeInTheDocument();
    expect(screen.getByText(/Romance/i)).toBeInTheDocument();
  });

  it('should render the search input with correct placeholder', () => {
    render(<BurgerMenu isOpen={true} />);
    const placeholder = screen.getByPlaceholderText('Busque por filmes ou séries');
    expect(placeholder).toBeInTheDocument();
  });
});
