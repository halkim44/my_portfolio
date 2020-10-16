import React, { lazy, Suspense } from "react";
import { useRoutes } from "hookrouter";
import { useMediaQuery } from "react-responsive";

import { Wrapper } from "./components/Wrapper";
import { Navbar } from "./components/Navbar";
import { NavbarContextProvider } from "./context/NavbarContext";
import { GlobalStyle } from "./GlobalStyles";
import { BreakPoints } from "./helper/breakpoints";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/skills": () => <Skills />,
  "/projects": () => <Projects />,
  "/contact": () => <Contact />,
};

function App() {
  const match = useRoutes(routes);
  const isDesktop = useMediaQuery(BreakPoints.desktop);
  return (
    <NavbarContextProvider>
      <Wrapper>
        <GlobalStyle isDesktop={isDesktop} />
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          {match || <NotFound />}
        </Suspense>
      </Wrapper>
    </NavbarContextProvider>
  );
}

export default App;
