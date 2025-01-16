import MenuCategory from './menuCategory';
import { render, screen } from '@testing-library/react';

describe('MenuCategory Component', () => {
  it('should render the title when passed as prop', () => {
    render(<MenuCategory title="O que você quer ver hoje?" />);

    // Verifica se o título foi renderizado
    const titleElement = screen.getByText('O que você quer ver hoje?');
    expect(titleElement).toBeInTheDocument();
  });
});
