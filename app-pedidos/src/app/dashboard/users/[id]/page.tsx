"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getUser } from "@/lib/apiclientUser";
import { IUser } from "@/interfaces/User";
import EditUserForm from "../_components/formedituser";
import Loading from "@/components/loading";
import { InfoItem } from "../_components/input";

function UserDetailAndEdit() {
  const param = useParams();
  const id = param.id as string;

  const [client, setClient] = useState<IUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      if (id) {
        const data = await getUser(id);
        setClient(data);
      }
    } catch (error) {
      setError("Error fetching user data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUpdateSuccess = (updatedUser: IUser) => {
    setClient(updatedUser);
    closeModal();
    fetchUser(); // Refresh data after update
  };

  if (isLoading) return <Loading />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!client) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto py-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Información del Cliente
          </h2>
          <div className="space-y-6">
            <InfoItem label="Nombre" value={client.nombre} />
            <InfoItem label="Correo" value={client.correo} />
            <InfoItem label="Celular" value={client.celular} />
            <InfoItem label="Dirección" value={`${client.direccion}, ${client.ciudad}`} />
          </div>
          <button
            onClick={openModal}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md mt-8 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Editar Cliente
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
          <div className="w-full max-w-md">
            <EditUserForm
              userId={id}
              initialData={client}
              onUpdateSuccess={handleUpdateSuccess}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}


export default UserDetailAndEdit;
