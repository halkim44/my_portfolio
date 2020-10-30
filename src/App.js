import React from "react";

import { Wrapper } from "./components/Wrapper";
import { NavbarContextProvider } from "./context/NavbarContext";
import { MainContent } from "./components/MainContent";
import { Menu } from "./components/menu/Menu";
import "./GlobalStyles.css";
import "./fonts.scss";

function App() {
  return (
    <NavbarContextProvider>
      <Wrapper>
        <Menu />
        <MainContent />
      </Wrapper>
    </NavbarContextProvider>
  );
}

export default App;
