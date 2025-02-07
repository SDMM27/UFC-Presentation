import React from 'react';
import { Search, Lightbulb } from 'lucide-react';

export function StrategicWatch() {
  return (
    <section id="strategic-watch" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Veille Stratégique</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Search className="mr-2 text-red-600" /> Type de Veille
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Veille concurrentielle :</strong> Suivi des organisations comme PFL, Bellator.</li>
              <li><strong>Veille technologique :</strong> Innovations en diffusion et performance.</li>
              <li><strong>Veille réglementaire :</strong> Changements de règles et lois sportives.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Lightbulb className="mr-2 text-red-600" /> Événements récents (Nov 2024 - Fév 2025)
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Nouvelles règles en MMA :</strong> À partir du 1ᵉʳ novembre 2024, de nouvelles règles unifiées ont été mises en place, notamment la légalisation des coudes descendants (12 à 6) et une nouvelle définition du combattant au sol.</li>
              <li><strong>Combats :</strong> Entre novembre et février, l'UFC a organisé plusieurs événements majeurs, y compris des combats pour le titre et a aussi annoncé des expansions dans de nouveaux marchés.</li>
              <li><strong>MAJ UFC Fight Pass :</strong> Lancement de nouvelles fonctionnalités sur UFC Fight Pass, telles que des contenus exclusifs et des améliorations de l'interface utilisateur.</li>
              <li><strong>Domination d'Islam Makhachev :</strong> Islam Makhachev a défendu avec succès pour la 4e fois son titre des poids légers lors de l'UFC 311 en janvier 2025, renforçant sa position dominante dans la division. Cette suprématie relance le débat sur l'introduction d'une nouvelle catégorie de poids entre les poids légers (70 KG) et les poids mi-moyens (77 KG), afin de réduire l'écart de poids et offrir de nouveaux défis aux combattants.</li>
            <li><strong>Prochains événements majeurs :</strong> Le 8 février 2025, UFC 312 à Sydney, Australie, avec Dricus Du Plessis affrontant Sean Strickland pour le titre des poids moyens. Le 15 février 2025, UFC Fight Night à Las Vegas, mettant en vedette Jared Cannonier contre Gregory Rodrigues.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicWatch;
