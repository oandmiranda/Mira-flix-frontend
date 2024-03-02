import Box from '@src/shared/Box/Box';
import { TextProps } from '@src/types/interfaces';

export default function Text({ tag, children, styleSheet }: TextProps) {
  return (
    <Box tag={tag} styleSheet={styleSheet}>
      {children}
    </Box>
  );
}

// Text.defaultProps = {
//   tag: 'p',
// };
