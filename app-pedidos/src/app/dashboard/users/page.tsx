import { IUser } from "@/interfaces/User";
import Dasboard from "../page";




interface UsersListProps {
  users: IUser[];
  onItemClick: (userId: string) => void;
}
const users: IUser[] = [
  {
    id: "1",
    nombre: "Juan",
    correo: "sddsdsd",
    celular: "sdsdsd",
    direccion: "sdsdsd",
    ciudad: "sdsdsd",
  },

  {
    id: "2",
    nombre: "Pedro",
    correo: "sddsdsd",
    celular: "sdsdsd",
    direccion: "sdsdsd",
    ciudad: "sdsdsd",
  },

  {
    id: "3",
    nombre: "Maria",
    correo: "sddsdsd",
    celular: "sdsdsd",
    direccion: "sdsdsd",
    ciudad: "sdsdsd",
  },]
  import React from 'react';

  const UsersList = () => {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded shadow-md">
              <p className="text-lg font-semibold">
                {user.nombre} - {user.correo}
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
                Ver detalles
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UsersList;
  
