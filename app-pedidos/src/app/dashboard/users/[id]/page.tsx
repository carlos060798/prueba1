import React from 'react';
import { Bars3Icon,  } from '@heroicons/react/24/outline'; // Importa los íconos de Heroicons

const cliente = {
    correo: "ccxzxz@gmail.com",
    celular: "3123123123",
    direccion: "Calle 123",
    ciudad: "Bogotá",
}
function detailsUser() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Detalles del Cliente</h1>
        <div className="flex">
          <Bars3Icon className="h-6 w-6 text-gray-600 mr-2 cursor-pointer" />
            <Bars3Icon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center mb-4">
          <Bars3Icon className="h-6 w-6 text-gray-500 mr-2" />
          <p className="text-lg font-semibold">{cliente.correo}</p>
        </div>
        <div className="flex items-center mb-4">
          <Bars3Icon className="h-6 w-6 text-gray-500 mr-2" />
          <p className="text-lg font-semibold">{cliente.celular}</p>
        </div>
        <div className="flex items-center mb-4">
          <Bars3Icon className="h-6 w-6 text-gray-500 mr-2" />
          <p className="text-lg font-semibold">{cliente.direccion}, {cliente.ciudad}</p>
        </div>
      </div>
    </div>
  );
};

export default detailsUser;

