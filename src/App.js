import React, {lazy, Suspense} from 'react';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { Navbar } from './components/Navbar';
import { useRoutes } from 'hookrouter';
import { NotFound } from './pages/NotFound';
import { NavbarContextProvider } from './context/NavbarContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));



const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/skills": () => <Skills />,
  "/projects": () => <Projects />,
  "/contact": () => <Contact />,
}

function App() {

  const match = useRoutes(routes);
  return (
    <NavbarContextProvider>
      <Wrapper>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          { match || <NotFound />}
        </Suspense>
      </Wrapper>
    </NavbarContextProvider>
  );
}

export default App;
