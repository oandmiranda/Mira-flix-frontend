import Box from '@src/shared/Box/box';
import { TextProps } from '@src/types/interfaces';

export default function Text({ tag, children, styleSheet }: TextProps) {
  return (
    <Box tag={tag} styleSheet={styleSheet}>
      {children}
    </Box>
  );
}
