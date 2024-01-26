import { BoxProps } from '@src/types/interfaces';
import styled from 'styled-components';

const Component = styled.div``;

export default function Box({ as: tag, styleSheet, children }: BoxProps) {
  const Tag = Component.withComponent(tag || 'div');
  return <Tag style={styleSheet}>{children}</Tag>;
}
