// import './stylesheet/App.scss';
import './App.css';
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Header } from './components/Header'
import {  About } from './components/About'
import {  Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Navbar from './components/Nav';
import projectsData from './assets/projectsData';


function App() {

  return (
      <div className="App" id='app'>
        <Navbar />
        <Header />
        <About />
        <Projects  items={projectsData}/>
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
