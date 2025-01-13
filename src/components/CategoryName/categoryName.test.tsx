import { render, screen } from '@testing-library/react';
import CategoryName from './categoryName';
import React, { ReactElement } from 'react';

describe('categoryName component', () => {
  it('should render the title as props', () => {
    render(<CategoryName title="Filmes de comédia" href="category/comedy" />);

    // Checks if the title is rendered correctly
    expect(screen.getByText('Filmes de comédia')).toBeInTheDocument();
  });

  it('should render the link with the correct href', () => {
    // O mock do next/link é configurado para simplificar a renderização do Link e garantir que o href seja propagado diretamente
    jest.mock(
      'next/link',
      () =>
        ({ children, ...rest }: { children: ReactElement }) =>
          React.cloneElement(children, { ...rest }),
    );
    render(<CategoryName title="Filmes de comédia" href="category/comedy" />);

    // Checks if the href has the correct link
    const linkElement = screen.getByText('Filmes de comédia').closest('a');
    expect(linkElement).toHaveAttribute('href', 'category/comedy');
  });
});
