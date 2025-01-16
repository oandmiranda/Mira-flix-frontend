import { IconProps } from '@src/types/interfaces';

export default function MovieIcon({ fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill={fill}
      data-testid="lupa-icon" // Add data-testid
    >
      <path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" />
    </svg>
  );
}

MovieIcon.defaultProps = {
  fill: 'inherit',
};
