import React from 'react';

const usuario = {
  nombre: "Juan",
  correo: "sddsdsd",
  celular: "sdsdsd",
  direccion: "sdsdsd",
  ciudad: "sdsdsd",
}

const NewUserForm = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Editar Usuario</h1>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            defaultValue={usuario.nombre}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            defaultValue={usuario.correo}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular</label>
          <input
            type="text"
            id="celular"
            name="celular"
            defaultValue={usuario.celular}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            defaultValue={usuario.direccion}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            defaultValue={usuario.ciudad}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;


