import theme from './themes';
import { errorStyleType } from '@src/types/interfaces';

// styles for validation errors in login and signup
export const errorStyle: errorStyleType = {
  color: theme.colors.errorStyle,
  padding: '5px 0px',
  fontSize: '14px',
};
