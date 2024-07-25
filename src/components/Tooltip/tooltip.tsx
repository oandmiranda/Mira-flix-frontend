import { TooltipBox, TooltipContainer } from './style';

interface TooltipProps {
  children?: React.ReactNode;
  content?: any;
}

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipContainer>
      {children}
      <TooltipBox>{content}</TooltipBox>
    </TooltipContainer>
  );
}
