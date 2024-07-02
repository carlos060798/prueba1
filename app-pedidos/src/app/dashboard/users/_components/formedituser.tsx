import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { updateUser } from "@/lib/apiclientUser";
import { IUser } from "@/interfaces/User";

interface EditUserFormProps {
  userId: string;
  initialData: IUser;
  onUpdateSuccess: (user: IUser) => void;
  closeModal: () => void;
}

type FormData = {
  nombre: string;
  correo: string;
  celular: string;
  direccion: string;
  ciudad: string;
};

function EditUserForm({
  userId,
  initialData,
  onUpdateSuccess,
  closeModal,
}: EditUserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: initialData,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const user = await updateUser(userId, data);

      onUpdateSuccess(user);
      reset();

      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Editar Cliente</h2>
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Cerrar"
        >
          x
        </button>
      </div>
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
            {...register("nombre", { required: "Nombre es requerido" })}
            className={`w-full px-3 py-2 border ${
              errors.nombre ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs italic">
              {errors.nombre.message}
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
            {...register("celular", { required: "Celular es requerido" })}
            className={`w-full px-3 py-2 border ${
              errors.celular ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.celular && (
            <p className="text-red-500 text-xs italic">
              {errors.celular.message}
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
            {...register("direccion", { required: "Dirección es requerida" })}
            className={`w-full px-3 py-2 border ${
              errors.direccion ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.direccion && (
            <p className="text-red-500 text-xs italic">
              {errors.direccion.message}
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
            {...register("ciudad", { required: "Ciudad es requerida" })}
            className={`w-full px-3 py-2 border ${
              errors.ciudad ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.ciudad && (
            <p className="text-red-500 text-xs italic">
              {errors.ciudad.message}
            </p>
          )}
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={() => {
              closeModal();
              reset(initialData);
            }}
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
  );
}

export default EditUserForm;
