import { LogoLink, LogoProps } from './style';

export default function Logo({ cursorDefault }: LogoProps) {
  return (
    <LogoLink cursorDefault={cursorDefault} href="/home">
      MiraFlix
    </LogoLink>
  );
}
