import React, { createContext, useState } from 'react';
import { factoryuseContext } from './factoryUseContext';

export const NavbarContext = createContext()
export const NavbarActionsContext = createContext()

export const useNavbarContext = factoryuseContext('Navbar', NavbarContext)
export const useNavbarActionsContext = factoryuseContext('NavbarAction', NavbarActionsContext)

export const NavbarContextProvider = ({children}) => {
  const [isNavbarOn, setNavbar] = useState(false)

  return (
    <NavbarContext.Provider value={isNavbarOn}>
      <NavbarActionsContext.Provider value={setNavbar}>
        {children}
      </NavbarActionsContext.Provider>
    </NavbarContext.Provider>
  )
}