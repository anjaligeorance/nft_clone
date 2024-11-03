
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StackedCards from './components/StackedCards'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StackedCards />
      <Footer />
    </div>
  );
}

export default App;
