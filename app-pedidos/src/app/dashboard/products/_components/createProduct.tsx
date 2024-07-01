"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import IProduct from "@/interfaces/product";

interface NewProductFormProps {
  closeModal: () => void;
  handleCreateProduct: (product: IProduct) => void;
}

type FormData = {
  nombre: string;
  valor: number;
  inventario: number;
};

const NewProductForm: React.FC<NewProductFormProps> = ({ closeModal, handleCreateProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await handleCreateProduct(data);
    reset();
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl relative w-full max-w-md">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear Producto</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: "Nombre es requerido" })}
              className={`w-full px-3 py-2 border ${errors.nombre ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre.message}</p>}
          </div>
          <div>
            <label htmlFor="valor" className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
            <input
              type="number"
              id="valor"
              {...register("valor", { required: "Valor es requerido" })}
              className={`w-full px-3 py-2 border ${errors.valor ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.valor && <p className="text-red-500 text-xs italic">{errors.valor.message}</p>}
          </div>
          <div>
            <label htmlFor="inventario" className="block text-sm font-medium text-gray-700 mb-1">Inventario</label>
            <input
              type="number"
              id="inventario"
              {...register("inventario", { required: "Inventario es requerido" })}
              className={`w-full px-3 py-2 border ${errors.inventario ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.inventario && <p className="text-red-500 text-xs italic">{errors.inventario.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-150 ease-in-out"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProductForm;

