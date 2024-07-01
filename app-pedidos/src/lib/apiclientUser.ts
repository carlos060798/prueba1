import axios from 'axios';
import { IUser } from '@/interfaces/User';
import { AxiosError } from 'axios';

const URLAPI = 'http://localhost:3000/api';

export async function getUsers() {
   try{
    const response =  await axios.get<IUser[]>('/api/user');
    return response.data;
   } catch (error) {
       const err = error as AxiosError;
       return err.message;
   }
}

export  async function createUser(user: IUser) {
    try{
        const response = await axios.post(`${URLAPI}/user`, user);
        return response.data;
    } catch (error) {
        const  err= error as AxiosError;
       return err.message
    }
}

export async function getUser(id: string) {
    try {
        const response = await axios.get(`${URLAPI}/user/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}

export async function deleteUser(id: string) {
    try {
        const response = await axios.delete(`${URLAPI}/user/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}

export async function updateUser(id: string, user: IUser) {
    try {
        const response = await axios.put(`${URLAPI}/user/${id}`, user);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}