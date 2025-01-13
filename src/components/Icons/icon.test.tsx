import { render, screen } from '@testing-library/react';
import LupaIcon from './Lupa/lupa_icon';

describe('Icon component', () => {
  it('should render the component correctly', () => {
    render(<LupaIcon />);

    const icon = screen.getByTestId('lupa-icon');
    expect(icon).toBeInTheDocument();
  });

  it('deve aplicar a posição absoluta se a propriedade "isPositionAbsolute" for true', () => {
    render(<LupaIcon isPositionAbsolute={true} />);

    const icon = screen.getByTestId('lupa-icon');
    expect(icon).toHaveStyle('position: absolute');
  });
});
