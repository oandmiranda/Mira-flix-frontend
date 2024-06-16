//  se eu passar a flag "NomeDaFlag", flex-Wrap deverá estar indefinido.

import { MovieContainer } from '@src/types/interfaces';
import styled from 'styled-components';

export const Container = styled.div<MovieContainer>`
  display: flex;
  width: 100%;
  margin-bottom: 85px;
  flex-wrap: ${(props) => (props.hasCarousel ? 'nowrap' : 'wrap')};
`;
