import React from 'react';
import { Target, Trophy, Globe } from 'lucide-react';

export default function Strategy() {
  return (
    <section id="strategy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Stratégie d'Entreprise</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Target size={48} className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Vision Globale</h3>
            <p className="text-gray-600">
              Développement continu de la marque UFC comme référence mondiale des sports de combat
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Trophy size={48} className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Excellence Sportive</h3>
            <p className="text-gray-600">
              Maintien des standards les plus élevés en matière de compétition et d'organisation
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Globe size={48} className="text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expansion Internationale</h3>
            <p className="text-gray-600">
              Conquête de nouveaux marchés et développement de la présence mondiale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}