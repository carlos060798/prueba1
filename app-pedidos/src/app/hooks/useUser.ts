"use client"
import { useState, useEffect } from 'react';
import { IUser } from '@/interfaces/User';
import { getUsers,deleteUser } from '@/lib/apiclientUser';

function useUser() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this effect runs only once on mount
      
    

    return { 
        users,
        openModal,
        closeModal,
        isModalOpen,
       
    };
}

export default useUser;