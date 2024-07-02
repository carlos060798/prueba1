"use client";

import useProducts from "@/app/hooks/useProduct";
import Loading from "@/components/loading";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import NewProductForm from "./_components/createProduct";
import EditProductForm from "./_components/editProduct";

const ProductList = () => {
  const {
    products,
    isLoading,
    page,
    totalCount,
    handlePreviousPage,
    handleNextPage,
    selectProductForEdit,
    handleDeleteProduct,
    openModal,
    isModalOpen,
    isEditing,
    closeModal,
    handleCreateProduct,
    handleUpdateProduct,
    selectedProduct
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
                      onClick={() => handleDeleteProduct(product._id as string)}
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
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={handlePreviousPage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(page - 1) * 10 + 1}</span> to <span className="font-medium">{Math.min(page * 10, totalCount)}</span> of{' '}
              <span className="font-medium">{totalCount}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={handlePreviousPage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {page}
              </button>
              <button
                onClick={handleNextPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
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

export default ProductList;



















