import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <section id="market" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Analyse de Marché</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <TrendingUp className="mr-2 text-red-600" />
              Croissance du Marché
            </h3>
            <p className="text-gray-600 mb-4">
              Le marché des MMA connaît une croissance annuelle de plus de 15% avec une valorisation
              globale dépassant les 8 milliards de dollars.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Expansion continue dans de nouveaux territoires</li>
              <li>Augmentation des revenus PPV</li>
              <li>Croissance des droits TV internationaux</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2 text-red-600" />
              Démographie
            </h3>
            <p className="text-gray-600 mb-4">
              Le public des MMA se diversifie, touchant une audience de plus en plus large :
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Core démographique : 18-34 ans</li>
              <li>Augmentation de l'audience féminine</li>
              <li>Fort engagement sur les réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}