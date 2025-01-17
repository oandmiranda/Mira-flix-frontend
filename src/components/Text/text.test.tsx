import { render, screen } from '@testing-library/react';
import Text from './text';

describe('Text component', () => {
  it('should render the children prop', () => {
    const children = 'this is a test';
    render(<Text>{children}</Text>);

    const textElement = screen.getByText(children);
    expect(textElement).toBeInTheDocument();
  });
});
