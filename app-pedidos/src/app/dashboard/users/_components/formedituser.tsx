import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateUser } from '@/lib/apiclientUser';
import { IUser } from '@/interfaces/User';
import { PencilIcon } from '@heroicons/react/24/outline';

interface EditUserFormProps {
  userId: string;
  initialData: IUser;
  onUpdateSuccess: (updatedUser: IUser) => void;
}

type FormData = {
  nombre: string;
  correo: string;
  celular: string;
  direccion: string;
  ciudad: string;
};

function EditUserForm({ userId, initialData, onUpdateSuccess }: EditUserFormProps) {
  const [isEditing, setIsEditing] = useState(false);

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
      const updatedUser = await updateUser(userId, data);
      onUpdateSuccess(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <PencilIcon className="h-5 w-5 mr-2" />
          Editar
        </button>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: "Nombre es requerido" })}
              className={`w-full px-3 py-2 border ${errors.nombre ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre.message}</p>}
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
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
              className={`w-full px-3 py-2 border ${errors.correo ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.correo && <p className="text-red-500 text-xs italic">{errors.correo.message}</p>}
          </div>

          <div>
            <label htmlFor="celular" className="block text-sm font-medium text-gray-700 mb-1">
              Celular
            </label>
            <input
              type="text"
              id="celular"
              {...register("celular", { required: "Celular es requerido" })}
              className={`w-full px-3 py-2 border ${errors.celular ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.celular && <p className="text-red-500 text-xs italic">{errors.celular.message}</p>}
          </div>

          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              {...register("direccion", { required: "Dirección es requerida" })}
              className={`w-full px-3 py-2 border ${errors.direccion ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.direccion && <p className="text-red-500 text-xs italic">{errors.direccion.message}</p>}
          </div>

          <div>
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              {...register("ciudad", { required: "Ciudad es requerida" })}
              className={`w-full px-3 py-2 border ${errors.ciudad ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.ciudad && <p className="text-red-500 text-xs italic">{errors.ciudad.message}</p>}
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
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
      )}
    </div>
  );
};

export default EditUserForm;