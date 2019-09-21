import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import CarouselComponent from './components/CarouselComponent'
import Footer from "./components/Footer";
import MainText from "./components/MainText";
function App() {
  return (
    
    <div className="App">
      <NavbarComponent/>
      <CarouselComponent/>
      <MainText/>
      <Footer/>
    </div>
  );
}

export default App;
