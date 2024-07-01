 "use  client"


import useUser from '@/app/hooks/useUser';
import { IUser } from "@/interfaces/User";
import Link from "next/link";

interface ListClientProps {
  clients: IUser[];
  handleDeleteUser: (id: string) => void;
}

export default function ListClient({ clients, handleDeleteUser }: ListClientProps) {
  if (!Array.isArray(clients) || clients.length === 0) {
    return <p>No hay usuarios disponibles.</p>;
  }

  return (
    <ul role="list" className="divide-y divide-gray-200 bg-white shadow rounded-lg">
      {clients.map((client: IUser) => (
        <li key={client._id} className="flex justify-between items-center p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
          <div className="min-w-0 flex-auto">
            <p className="text-lg font-semibold text-gray-900">{client.nombre}</p>
            <p className="mt-1 text-sm text-gray-500">{client.correo}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {client.ciudad}
            </p>
            <Link href={`/dashboard/users/${client._id}`} 
            className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
             info
            </Link>
            <button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
             onClick={() => handleDeleteUser(client._id)} // Llama a la función handleDeleteUser con el ID del usuario
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}