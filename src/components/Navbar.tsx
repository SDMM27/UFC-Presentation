import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">UFC Analysis</div>
        <div className="hidden md:flex space-x-6">
          <a href="#strategy" className="hover:text-red-500 transition">Stratégie</a>
          <a href="#market" className="hover:text-red-500 transition">Marché</a>
          <a href="#demand" className="hover:text-red-500 transition">Demande</a>
          <a href="#supply" className="hover:text-red-500 transition">Offre</a>
          <a href="#environment" className="hover:text-red-500 transition">Environnement</a>
        </div>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}