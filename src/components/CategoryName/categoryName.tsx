import Box from '@src/shared/Box/box';
import Text from '../Text/text';
import { CategoryProps } from '@src/types/interfaces';
import theme from '@src/styles/themes';

export default function CategoryName({ title }: CategoryProps) {
  return (
    <Box tag="div">
      <Text
        tag="h1"
        styleSheet={{
          marginBottom: '15px',
          padding: '15px',
          fontWeight: 'normal',
          borderBottom: '1px solid #1F2222',
          color: theme.colors.text.logo,
        }}
      >
        {title}
      </Text>
    </Box>
  );
}
