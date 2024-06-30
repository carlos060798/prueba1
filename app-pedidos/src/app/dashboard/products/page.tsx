import React from 'react';


const products = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2',
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3',
  },
  {
    id: 4,
    nombre: 'Producto 4',
    descripcion: 'Descripción del producto 4',
  },
  {
    id: 5,
    nombre: 'Producto 5',
    descripcion: 'Descripción del producto 5',
  },
];

const ProductsList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{product.nombre}</p>
                  <p className="text-gray-600">{product.descripcion}</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Ver Detalles
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;