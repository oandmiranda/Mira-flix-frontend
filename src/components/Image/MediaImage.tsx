import { MediaImageProps } from '@src/types/interfaces';
import { StyledMediaImage } from './style';

export default function MediaImage({
  src,
  alt,
  priority,
  width,
  height,
  zoomEffect,
  styleSheet,
}: MediaImageProps) {
  // StyledMediaImage is a Next Component
  // width and height properties are mandantory in the Image component of Next JS
  return (
    <StyledMediaImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      zoomEffect={zoomEffect}
      style={styleSheet}
    />
  );
}
