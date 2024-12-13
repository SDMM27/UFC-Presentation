import React from 'react';
import { Users, Award, Tv } from 'lucide-react';

export default function SupplyAnalysis() {
  return (
    <section id="supply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Analyse de l'Offre</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Users className="text-red-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Talents</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Plus de 600 athlètes sous contrat</li>
              <li>• Recrutement international</li>
              <li>• Programme de développement</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Award className="text-red-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Événements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 42+ événements par an</li>
              <li>• Présence mondiale</li>
              <li>• PPV et Fight Nights</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Tv className="text-red-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Distribution</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Diffusion dans 165+ pays</li>
              <li>• Plateforme UFC Fight Pass</li>
              <li>• Partenariats TV majeurs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}