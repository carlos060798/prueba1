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