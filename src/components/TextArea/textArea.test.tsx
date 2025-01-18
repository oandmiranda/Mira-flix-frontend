import { render, screen } from '@testing-library/react';
import TextArea from './textArea';

describe('Text component', () => {
  it('should render the children prop', () => {
    const children = 'this is a test';
    render(<TextArea>{children}</TextArea>);

    const textElement = screen.getByText(children);
    expect(textElement).toBeInTheDocument();
  });
});
