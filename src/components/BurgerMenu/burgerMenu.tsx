import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { HiComputerDesktop } from 'react-icons/hi2';
import { TbPoint } from 'react-icons/tb';
import { Container } from './styles';
import { useBurgerMenuContext } from '@src/context/burgerMenuContext';
import Box from '@src/shared/Box/box';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

export default function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  const { closeMenu } = useBurgerMenuContext();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    closeMenu(); // Fecha o menu
    router.push(href); // Faz a navegação para a nova rota
  };

  return (
    <Container isOpen={isOpen}>
      <IoClose size={40} onClick={closeMenu} className="close-icon" />

      <nav>
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '30px',
          }}
        >
          <Logo noLink />
          <Input placeholder="Busque por filmes ou séries" width="260px" />
        </Box>

        <Box tag="div" styleSheet={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <a onClick={() => handleNavigation('/home')} className="home">
            <FaHome size={15} />
            Home
          </a>
          <a onClick={() => handleNavigation('/originais_netflix')}>
            <MdOutlineLocalMovies size={15} />
            Originais Netflix
          </a>
          <a onClick={() => handleNavigation('/trending')}>
            <IoIosHeart size={15} />
            Recomendados para você
          </a>
          <a onClick={() => handleNavigation('/top_rated')}>
            <FaStar size={15} />
            Em alta
          </a>
          <a onClick={() => handleNavigation('/series')}>
            <HiComputerDesktop size={15} />
            Séries
          </a>

          <hr />

          <a onClick={() => handleNavigation('/category/action')}>
            <TbPoint size={15} />
            Ação
          </a>
          <a onClick={() => handleNavigation('/category/comedy')}>
            <TbPoint size={15} />
            Comédia
          </a>
          <a onClick={() => handleNavigation('/category/horror')}>
            <TbPoint size={15} />
            Terror
          </a>
          <a onClick={() => handleNavigation('/category/romance')}>
            <TbPoint size={15} />
            Romance
          </a>
        </Box>
      </nav>
    </Container>
  );
}
