import { createUser } from "@/lib/apiclientUser";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface NewUserFormProps {
  closeModal: () => void;
}

type FormData = {
 
  nombre: string;
  correo: string;
  celular: string;
  direccion: string;
  ciudad: string;
};

function NewUserForm ({ closeModal }: NewUserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    await createUser(data);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: true })}
              className={`w-full px-3 py-2 border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-xs italic">
                Nombre es requerido.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              {...register("correo", {
                required: "Correo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ingrese un correo válido",
                },
              })}
              className={`w-full px-3 py-2 border ${
                errors.correo ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.correo && (
              <p className="text-red-500 text-xs italic">
                {errors.correo.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="celular"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Celular
            </label>
            <input
              type="text"
              id="celular"
              {...register("celular", { required: true })}
              className={`w-full px-3 py-2 border ${
                errors.celular ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.celular && (
              <p className="text-red-500 text-xs italic">
                Celular es requerido.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              {...register("direccion", { required: true })}
              className={`w-full px-3 py-2 border ${
                errors.direccion ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.direccion && (
              <p className="text-red-500 text-xs italic">
                Dirección es requerida.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="ciudad"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              {...register("ciudad", { required: true })}
              className={`w-full px-3 py-2 border ${
                errors.ciudad ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.ciudad && (
              <p className="text-red-500 text-xs italic">
                Ciudad es requerida.
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUserForm;