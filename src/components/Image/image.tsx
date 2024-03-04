import { MediaImageProps } from '@src/types/interfaces';
import { StyledMediaImage } from './style';

export default function MediaImage({ src, alt, priority, styleSheet }: MediaImageProps) {
  // StyledMediaImage is a Next Component
  return <StyledMediaImage src={src} alt={alt} style={styleSheet} priority={priority} />;
}
