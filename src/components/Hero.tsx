import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2018/10/conor-mcgregor-khabib-nurmagomedov-ufc-229-getty.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">UFC</h1>
          <p className="text-xl mb-8">Leader Mondial des Arts Martiaux Mixtes</p>
          <a 
            href="#strategy" 
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            Découvrir l'Analyse
          </a>
        </div>
      </div>
    </div>
  );
}