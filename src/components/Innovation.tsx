import React from 'react';
import { Lightbulb, Rocket } from 'lucide-react';

export function Innovation() {
    return (
      <section id="innovation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Innovations Futures</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Rocket className="mr-2 text-red-600" /> Innovation Principale
              </h3>
              <p className="text-gray-600">Implémentation de l'IA dans le jugement des combats pour éviter les décisions controversées.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Lightbulb className="mr-2 text-red-600" /> Pistes d'Innovation
              </h3>
              <ul className="list-disc list-inside text-gray-600">
              <li>Introduction de nouvelles catégories de poids pour inclure plus de combattants.</li>
                <li>Réintégrer les tournois en une soirée</li>
                <li>Combats inter-organisations</li>
                <li>Réglementation sur le cutting des combattants</li>
                <li>Réalité virtuelle pour expériences immersives des spectateurs.</li>
                <li>Capteurs biométriques pour suivi en temps réel des athlètes.</li>
                <li>Nouveaux formats de combats pour captiver le public.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Innovation;