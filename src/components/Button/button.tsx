import { ButtonProps } from '@src/types/interfaces';
import { S_Button } from './styles';

export default function Button({
  onClick,
  href,
  children,
  width,
  background,
  backgroundHover,
  disabled,
  styleSheet,
}: ButtonProps) {
  return (
    <a href={href} onClick={onClick}>
      <S_Button
        width={width}
        background={background}
        backgroundHover={backgroundHover}
        disabled={disabled}
        style={styleSheet}
      >
        {children}
      </S_Button>
    </a>
  );
}
