import { Schema, model, Document } from 'mongoose';

export interface ProductoPedido {
    productoId: string;
    nombre: string;
    cantidad: number;
}

export interface Pedido {
    fecha: Date;
    estado: 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
    pagado: boolean;
    clienteNombre: string;
    clienteCelular: string;
    clienteCorreo: string;
    clienteDireccion: string;
    clienteCiudad: string;
    productos: ProductoPedido[];
    metodoEnvio: 'domicilio' | 'recoge en punto';
    observaciones?: string;
}

export interface PedidoDocument extends Pedido, Document {}

const productoPedidoSchema = new Schema({
    productoId: { type: Schema.Types.ObjectId, ref: 'Producto' },
    nombre: String,
    cantidad: Number,
});

const pedidoSchema = new Schema<PedidoDocument>({
    fecha: { type: Date, default: Date.now },
    estado: { type: String, enum: ['pendiente', 'en ruta', 'entregado', 'cancelado'], default: 'pendiente' },
    pagado: { type: Boolean, default: false },
    clienteNombre: { type: String, required: true },
    clienteCelular: { type: String, required: true },
    clienteCorreo: { type: String, required: true },
    clienteDireccion: { type: String, required: true },
    clienteCiudad: { type: String, required: true },
    productos: [productoPedidoSchema],
    metodoEnvio: { type: String, enum: ['domicilio', 'recoge en punto'], default: 'domicilio' },
    observaciones: String,
});

export default model<PedidoDocument>('Pedido', pedidoSchema);