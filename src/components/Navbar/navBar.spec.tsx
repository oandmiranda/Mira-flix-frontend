import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('Teste', () => {
  it('testing', () => {
    render(<NavBar />);
    const qcoisa = screen.getByText('Hello World');
    expect(qcoisa).toBeInTheDocument();
  });
});
