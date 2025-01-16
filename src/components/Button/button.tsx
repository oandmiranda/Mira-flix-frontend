import Link from 'next/link';
import { ButtonProps } from '@src/types/interfaces';
import { S_Button } from './styles';

export default function Button({
  onClick,
  href,
  children,
  width,
  background,
  backgroundhover,
  disabled,
  styleSheet,
}: ButtonProps) {
  return (
    // '#' para garantir que o componente não quebre. Isso é útil para evitar erros de navegação.
    <Link href={href || '#'} onClick={onClick}>
      <S_Button
        width={width}
        background={background}
        backgroundhover={backgroundhover}
        disabled={disabled}
        style={styleSheet}
        aria-label="button"
        data-testid="button"
      >
        {children}
      </S_Button>
    </Link>
  );
}
