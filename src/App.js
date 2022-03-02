import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer'
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={
          <Home />
        } />


        <Route path='/about' element={
          <About />
        } />

        <Route path='/contact' element={
          <Contact />
        } />

        <Route path='/project' element={
          <Project />
        } />

      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
