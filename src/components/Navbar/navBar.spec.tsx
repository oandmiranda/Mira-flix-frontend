import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should show children', () => {
    const { getByText } = render(<NavBar />);
    const homeLink = getByText('Home');
    const aboutLink = getByText('About');
    const contactLink = getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
