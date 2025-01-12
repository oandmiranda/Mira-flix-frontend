import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should show children', () => {
    const { getByText } = render(<NavBar />);
    const recomendadosParaVoceLink = getByText('Recomendados para você');
    const emAltaLink = getByText('Em alta');
    const seriesLink = getByText('Séries');

    expect(recomendadosParaVoceLink).toBeInTheDocument();
    expect(emAltaLink).toBeInTheDocument();
    expect(seriesLink).toBeInTheDocument();
  });
});
