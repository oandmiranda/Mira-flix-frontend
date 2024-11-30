import theme from '@src/styles/themes';
import styled from 'styled-components';

export const Container = styled.section``;

export const Button = styled.button`
  width: 100px;
  margin: 12px 0;
  padding: 16px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(14, 14, 20, 0.6);
  background: ${theme.colors.background.button};
  transition: background 0.4s ease-in-out;

  &:hover {
    background: ${theme.colors.background.blue};
  }
`;
