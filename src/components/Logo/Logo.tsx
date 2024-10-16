import { LogoLink, LogoText } from './style';
import { GiPopcorn } from 'react-icons/gi';
import Box from '@src/shared/Box/box';
import { LogoProps } from '@src/types/interfaces';

export default function Logo({ cursorDefault, styleSheet, noLink = false }: LogoProps) {
  return (
    <Box tag="div" styleSheet={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {noLink ? (
        <LogoText style={styleSheet}>
          MiraFlix
          <GiPopcorn />
        </LogoText>
      ) : (
        <LogoLink cursorDefault={cursorDefault} href="/home">
          MiraFlix
          <GiPopcorn />
        </LogoLink>
      )}
    </Box>
  );
}
