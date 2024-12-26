import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Blogs from './components/sections/Blogs';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
      <SocialLinks />
    </Layout>
  );
}

export default App;