import React from 'react';
import './App.css'; // Ensure this imports your updated styles
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
