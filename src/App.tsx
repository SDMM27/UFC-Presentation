import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import MarketAnalysis from './components/MarketAnalysis';
import DemandAnalysis from './components/DemandAnalysis';
import SupplyAnalysis from './components/SupplyAnalysis';
import Environment from './components/Environment';
import StrategicWatch from './components/StrategicWatch';
import Innovation from './components/Innovation';

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
      <StrategicWatch />
      <Innovation />
    </div>
  );
}

export default App;
