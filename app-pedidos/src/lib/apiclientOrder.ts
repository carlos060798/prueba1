import axios from 'axios';
import IOrder from '@/interfaces/product';
import { AxiosError } from 'axios';

const URLAPI = 'http://localhost:3000/api';


export async function getorderByPage(page: number) {
    try {
        const response = await axios.get(`${URLAPI}/order/page/${page}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}


export  async function createorder(dataOrder: IOrder) {
    try{
        const response = await axios.post(`${URLAPI}/order`, dataOrder);
        return response.data;
    } catch (error) {
        const  err= error as AxiosError;
       return err.message
    }
}


export async function getorder(id: string) {
    try {
        const response = await axios.get(`${URLAPI}/order/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}


export async function deleteorder(id: string) {
    try {
        const response = await axios.delete(`${URLAPI}/order/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}


export async function updateorder(id: string, dataOrder: IOrder) {
    try {
        const response = await axios.put(`${URLAPI}/order/${id}`, dataOrder);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.message;
    }
}


export  async function changeestado(id: string, estado: string) {
    try{
        const response = await axios.patch(`${URLAPI}/order/${id}`, {estado});
        return response.data;
    } catch (error) {
        const  err= error as AxiosError;
       return err.message
    }
} 