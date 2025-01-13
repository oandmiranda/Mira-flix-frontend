import { fireEvent, render, screen } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
  it('should to be clickable', () => {
    const handleClick = jest.fn(); // Função mock para verificar o clique

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByLabelText('button');

    // Simular o clique no botão
    fireEvent.click(button);
    // Verificar se o handleClick foi chamado
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render children correctly', () => {
    const dynamicText = 'Dynamic Button Text';

    render(<Button>{dynamicText}</Button>);
    // Verifica se o texto dentro do botão está correto
    expect(screen.getByText(dynamicText)).toBeInTheDocument();
  });
});
