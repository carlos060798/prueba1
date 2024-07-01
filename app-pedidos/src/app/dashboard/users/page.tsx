"use client"

import React from 'react';
import ListClient from "./_components/listUsers";
import NewUserForm from './_components/formcreateuser';
import useUser from '@/app/hooks/useUser';


function UsersList() {
    const { users, openModal, closeModal, isModalOpen } = useUser();
   

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Lista de Usuarios</h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={openModal}
                >
                    Crear Nuevo Usuario
                </button>
            </div>
            <ListClient clients={users} />
            {isModalOpen && (
                <NewUserForm closeModal={closeModal} />
            )}
        </div>
    );
}

export default UsersList;
  
