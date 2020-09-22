import React from 'react';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useRoutes } from 'hookrouter';
import { NotFound } from './pages/NotFound';

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
    <Wrapper>
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
