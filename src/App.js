import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { Skills } from './components/Skills/Skills'
import { Technologies } from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects'
import  { Footer }  from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Skills />
     <Technologies />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
