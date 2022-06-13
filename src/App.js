import './App.css';
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Header } from './components/Header'
import {  About } from './components/About'
import {  Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Navbar from './components/Nav';




function App() {
  return (
    // <Router>
      <div className="App" id='app'>
          {/* <Routes >
            <Route  path='/' element={<Header/>}/>
            <Route  path='/About' element={<About/>}/>
            <Route  path='/Projects' element={<Projects/>}/>
            <Route  path='/Skills' element={<Skills/>}/>
            <Route  path='/Contact' element={<Contact/>}/>
          </Routes> */}
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />

      </div>
    // </Router>
  );
}

export default App;
