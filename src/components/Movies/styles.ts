import styled from 'styled-components';
import { MovieContainer } from '@src/types/interfaces';

export const Container = styled.div<MovieContainer>`
  display: flex;
  justify-content: center;
  padding-inline: 10px;
  margin-bottom: 100px;
  flex-wrap: ${(props) => (props.hasCarousel ? 'nowrap' : 'wrap')};
`;
