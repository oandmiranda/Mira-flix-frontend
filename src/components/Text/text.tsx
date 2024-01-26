import { TextProps } from '@src/types/interfaces';
import Box from '../../shared/Box/box';

export default function Text({ tag, children, styleSheet }: TextProps) {
  return (
    <Box as={tag} styleSheet={styleSheet}>
      {children}
    </Box>
  );
}

Text.defaultProps = {
  tag: 'p',
};
