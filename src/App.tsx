import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import MarketAnalysis from './components/MarketAnalysis';
import DemandAnalysis from './components/DemandAnalysis';
import SupplyAnalysis from './components/SupplyAnalysis';
import Environment from './components/Environment';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Strategy />
      <MarketAnalysis />
      <DemandAnalysis />
      <SupplyAnalysis />
      <Environment />
    </div>
  );
}

export default App;