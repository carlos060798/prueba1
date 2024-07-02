export interface IOrder {
    _id?: string;
    fecha: Date;
    estado: 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
    pagado: boolean;
    cliente: string;
    productos: string[];
    metodoEnvio: 'domicilio' | 'recoge en punto';
    observaciones?: string;
} 

export  interface  IOrderdetails {
    _id: string;
    estado: string;
    pagado: boolean;
    cliente: {
      _id: string;
      nombre: string;
      correo: string;
      celular: string;
      direccion: string;
      ciudad: string;
    };
    productos: {
      _id: string;
      nombre: string;
      valor: number;
      inventario: number;
    }[];
    metodoEnvio: string;
    observaciones: string;
    fecha: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }