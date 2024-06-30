import React from 'react';

const product = {
  id: 1,
  nombre: 'Producto 1',
  descripcion: 'Descripción del producto 1',
};

const ProductDetails = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Detalles del Producto</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">{product.nombre}</p>
          <p className="text-gray-600">{product.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;