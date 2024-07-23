import { ButtonProps } from '@src/types/interfaces';
import { S_Button } from './styles';

export default function Button({ onClick, href, children, styleSheet }: ButtonProps) {
  return (
    <a href={href} onClick={onClick}>
      <S_Button style={styleSheet}>{children}</S_Button>
    </a>
  );
}
