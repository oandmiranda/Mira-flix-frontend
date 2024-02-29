import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('should show the logo', () => {
    const { getByText } = render(<Logo />);
    expect(getByText('Logo')).toBeInTheDocument();
  });
});
