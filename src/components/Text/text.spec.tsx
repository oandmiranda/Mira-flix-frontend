import { render, screen } from '@testing-library/react';
import Text from './text';

describe('Text', () => {
  it('testing2', () => {
    render(<Text>Children testing</Text>);
    const content = screen.getByText(/Children testing/i);
    expect(content).toBeInTheDocument();
  });
});
