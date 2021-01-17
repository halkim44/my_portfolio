import React, { useEffect } from "react";

import { Wrapper } from "./components/Wrapper";
import { NavbarContextProvider } from "./context/NavbarContext";
import { MainContent } from "./components/MainContent";
import { Menu } from "./components/menu/Menu";
import "./GlobalStyles.css";
import { useFontLoadStatus } from "./hooks/font-loading-status";
import { onFontIsLoaded } from "./fontLoadingStrategy";
// import "./fonts.scss";

function App() {
  const { fontLoadStatus, setFontIsLoaded } = useFontLoadStatus();

  useEffect(() => {
    onFontIsLoaded(setFontIsLoaded);
  }, [setFontIsLoaded]);
  return (
    <>
      {console.log(fontLoadStatus)}
      {!fontLoadStatus && (
        <div className="loading-page--main">
          <span>Loading...</span>
        </div>
      )}
      <NavbarContextProvider>
        <Wrapper>
          <Menu />
          <MainContent />
        </Wrapper>
      </NavbarContextProvider>
    </>
  );
}

export default App;
