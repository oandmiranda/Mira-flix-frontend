import { StyledIcon } from './style';
import { IconProps } from '@src/types/interfaces';

export default function Icon({ href, children, size, fill }: IconProps) {
  return (
    <>
      <StyledIcon href={href} size={size} fill={fill}>
        {children}
      </StyledIcon>
    </>
  );
}
