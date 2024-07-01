import axios from 'axios';
import Iproduct  from '@/interfaces/product';
import { AxiosError } from 'axios';

const URLAPI = 'http://localhost:3000/api';

export async function getproducts() {
   try{
    const response =  await axios.get<Iproduct[]>(`${URLAPI}/product    `);
    return response.data;
   } catch (error) {
       const err = error as AxiosError;
       return err.message;
   }
}

export  async function createproduct(product: Iproduct) {
    try{
        const response = await axios.post(`${URLAPI}/product`, product);
        return response.data;
    } catch (error) {
        const  err= error as AxiosError;
       return err.message
    }
}

export async function getproduct(id: string) {
    try {
        const response = await axios.get(`${URLAPI}/product/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}

export async function deleteproduct(id: string) {
    try {
        const response = await axios.delete(`${URLAPI}/product/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}

export async function updateproduct(id: string, product: Iproduct) {
    try {
        const response = await axios.put(`${URLAPI}/product/${id}`, product);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}