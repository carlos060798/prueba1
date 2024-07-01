"use client";

import React from 'react';
import EditProductForm from './_components/editProduct';
import NewProductForm from './_components/createProduct';
import useProducts from '@/app/hooks/useProduct';
import Loading from '@/components/loading';

const ProductsList = () => {
  const {
    products,
    openModal,
    closeModal,
    isModalOpen,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    selectProductForEdit,
    selectedProduct,
    isEditing,
    isLoading,
  } = useProducts();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lista de Productos</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => openModal(false)}
        >
          Crear Nuevo Producto
        </button>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        {isLoading ? (
          <Loading />
        ) : products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product._id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{product.nombre}</p>
                    <p className="text-gray-600">Valor: {product.valor} - Inventario: {product.inventario}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => selectProductForEdit(product)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        isEditing ? (
          <EditProductForm
            closeModal={closeModal}
            handleUpdateProduct={handleUpdateProduct}
            selectedProduct={selectedProduct!}
          />
        ) : (
          <NewProductForm
            closeModal={closeModal}
            handleCreateProduct={handleCreateProduct}
          />
        )
      )}
    </div>
  );
};

export default ProductsList;
