import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';

jest.mock('api', () => {
  return {
    getData: () => {
      return Promise.resolve({
        title: 'Título da API',
        description: 'Descrição da API',
        buttonText: 'Botão da API',
      });
    },
  };
});

describe('Componente Header', () => {
  it('deve renderizar o título, a descrição e o botão corretamente', async () => {
    const { getByText, getByRole } = render(<Header />);

    // Espera que o título seja renderizado com o texto "Título da API"
    await expect(getByText('Título da API')).toBeInTheDocument();

    // Espera que a descrição seja renderizada com o texto "Descrição da API"
    await expect(getByText('Descrição da API')).toBeInTheDocument();

    // Espera que o botão seja renderizado com o texto "Botão da API"
    await expect(getByRole('button')).toHaveTextContent('Botão da API');
  });
});
