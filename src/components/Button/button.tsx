import { ButtonProps } from '@src/types/interfaces';

export default function Button({ onClick, href, children, styleSheet }: ButtonProps) {
  return (
    <a href={href} onClick={onClick} style={styleSheet}>
      {children}
    </a>
  );
}
