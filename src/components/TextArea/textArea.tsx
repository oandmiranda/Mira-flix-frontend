import { TextAreaProps } from '@src/types/interfaces';
import { TextArea_S } from './style';

export default function TextArea({ children }: TextAreaProps) {
  return <TextArea_S>{children}</TextArea_S>;
}
