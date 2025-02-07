import React from 'react';
import { BarChart } from 'lucide-react';

export default function DemandAnalysis() {
  return (
    <section id="demand" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Analyse de la Demande</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center">
              <BarChart className="mr-2 text-red-600" />
              Tendances de Consommation
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Événements Live</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Streaming Digital</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Merchandising</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Public Cible</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">1</span>
                <p>Hommes et femmes âgés de 18 à 34 ans</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">2</span>
                <p>Passionnés de sports de combat</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">3</span>
                <p>Passionés de divertissement sportif</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Attente des consommateurs</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">1</span>
                <p>Accès à des combats de haute qualité</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">2</span>
                <p>Contenu exclusif et innovant</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">3</span>
                <p>Interactions avec les combattants via les médias sociaux</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Facteurs de Croissance</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">1</span>
                <p>Augmentation de la popularité des sports de combat</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">2</span>
                <p>Développement des plateformes de streaming</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 mt-1">3</span>
                <p>Émergence de nouvelles stars internationales</p>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}