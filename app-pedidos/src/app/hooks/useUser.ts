"use  client"
import { useState, useEffect } from 'react';
import { IUser } from '@/interfaces/User';
import { getUsers, deleteUser, createUser } from '@/lib/apiclientUser';

function useUser() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers(); // Cargar usuarios al inicio

        // Cleanup function para asegurar que el modal se cierre si se desmonta el componente
        return () => setIsModalOpen(false);
    }, []);

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleCreateUser = async (userData: any) => {
        try {
            await createUser(userData); // Lógica para crear usuario
            fetchUsers(); // Actualizar lista de usuarios después de crear uno nuevo
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleDeleteUser = async (id: string) => {
        try {
            await deleteUser(id); // Lógica para eliminar usuario
            setUsers(users.filter(user => user._id !== id)); // Actualizar lista de usuarios localmente
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return { 
        users,
        openModal,
        closeModal,
        isModalOpen,
        handleCreateUser,
        handleDeleteUser
    };
}

export default useUser;
