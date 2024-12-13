import React from 'react';
import { Shield, Scale, Globe2 } from 'lucide-react';

export default function Environment() {
  return (
    <section id="environment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Analyse de l'Environnement</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Shield className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Régulation</h3>
                <p className="text-gray-600">
                  Collaboration étroite avec les commissions athlétiques et respect des normes de sécurité
                  internationales pour garantir l'intégrité du sport.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Scale className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Concurrence</h3>
                <p className="text-gray-600">
                  Position dominante sur le marché des MMA avec des concurrents régionaux émergents
                  et une diversification des sports de combat.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Globe2 className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Impact Global</h3>
                <p className="text-gray-600">
                  Influence croissante sur la culture sportive mondiale et développement
                  de programmes communautaires internationaux.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Facteurs Externes</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">Économiques</h4>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600">Croissance du marché du sport et du divertissement</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Technologiques</h4>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600">Évolution des plateformes de diffusion digitales</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Sociaux</h4>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600">Acceptation croissante des sports de combat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}