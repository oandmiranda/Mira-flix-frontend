import styled from 'styled-components';
import { MovieContainer } from '@src/types/interfaces';

export const MoviesContainer = styled.div<MovieContainer>`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  flex-wrap: ${(props) => (props.hasCarousel ? 'nowrap' : 'wrap')};
`;
