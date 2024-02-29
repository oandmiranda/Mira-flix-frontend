import React from 'react';
import { render } from '@testing-library/react';
import NavLink from './navLink';

describe('NavLink component', () => {
  it('should render a children', () => {
    const props = {
      href: '/example',
      children: 'children',
      styleSheet: { color: 'black' },
    };

    const { getByText } = render(<NavLink {...props} />);

    const linkElement = getByText('children');
    expect(linkElement).toBeInTheDocument();
  });
});
