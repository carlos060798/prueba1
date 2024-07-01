"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getUser } from '@/lib/apiclientUser';
import { IUser } from '@/interfaces/User';
import { UserIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import EditUserForm from '../_components/formedituser';
import Loading from '@/components/loading';


function UserDetailAndEdit () {
  const params = useParams();
  const userId = params.id as string;
  const [client, setClient] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const data = await getUser(userId);
        setClient(data);
      }
    };

    fetchUser();
  }, [userId]);
  if (!client) return <Loading />;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Detalles del Cliente</h1>
      <div className="flex gap-8">
        <div className="w-1/2 pr-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Información del Cliente</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 text-blue-500 mr-3" />
                <p className="text-lg text-gray-600">{client.nombre}</p>
              </div>
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 text-blue-500 mr-3" />
                <p className="text-lg text-gray-600">{client.correo}</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-green-500 mr-3" />
                <p className="text-lg text-gray-600">{client.celular}</p>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-red-500 mr-3" />
                <p className="text-lg text-gray-600">{client.direccion}, {client.ciudad}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <EditUserForm
            userId={userId}
            initialData={client}
            onUpdateSuccess={(updatedUser) => setClient(updatedUser)}
          />
        </div>
      </div>
    </div>
  );

};

export default UserDetailAndEdit;