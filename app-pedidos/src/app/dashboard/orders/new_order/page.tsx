import React from 'react';

const NewOrder = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Crear Nueva Orden</h1>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número de Orden</label>
          <input
            type="text"
            id="numero"
            name="numero"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Cliente</label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrder;
