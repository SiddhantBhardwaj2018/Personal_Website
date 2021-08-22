import React from 'react'
import './App.css';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience'
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
