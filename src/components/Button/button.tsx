import { ButtonProps } from '@src/types/interfaces';
import { S_Button } from './styles';

export default function Button({ onClick, href, children, width, background, styleSheet }: ButtonProps) {
  return (
    <a href={href} onClick={onClick}>
      <S_Button width={width} background={background} style={styleSheet}>
        {children}
      </S_Button>
    </a>
  );
}
