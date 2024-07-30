import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BurgerMenuProps } from '@src/types/interfaces';

const BurgerMenuContext = createContext<BurgerMenuProps>({
  menuIsOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
});

export const BurgerMenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => setMenuIsOpen(true);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <BurgerMenuContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>{children}</BurgerMenuContext.Provider>
  );
};

export const useBurgerMenuContext = () => useContext(BurgerMenuContext);
export default BurgerMenuContext;
