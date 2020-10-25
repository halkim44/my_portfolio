import React from "react";
import { useMediaQuery } from "react-responsive";

import { Wrapper } from "./components/Wrapper";
import { NavbarContextProvider } from "./context/NavbarContext";
import { GlobalStyle } from "./GlobalStyles";
import { BreakPoints } from "./helper/breakpoints";
import { MainContent } from "./components/MainContent";
import { Fonts } from "./fonts";
import { Menu } from "./components/menu/Menu";

function App() {
  const isDesktop = useMediaQuery(BreakPoints.desktop);
  return (
    <NavbarContextProvider>
      <Wrapper>
        <Fonts />
        <GlobalStyle isDesktop={isDesktop} />
        <Menu />
        <MainContent />
      </Wrapper>
    </NavbarContextProvider>
  );
}

export default App;
