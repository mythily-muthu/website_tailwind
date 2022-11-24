import React from 'react';
import HeadLineCards from './components/HeadLineCards';
import Food from './components/Food';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
    </div>
  );
}

export default App;
