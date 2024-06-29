/*import { Schema, model, models, Document, Types } from 'mongoose';


export interface Pedido {
    fecha: Date;
    estado: 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
    pagado: boolean;
    cliente: Types.ObjectId;
    productos: Types.ObjectId[];
    metodoEnvio: 'domicilio' | 'recoge en punto';
    observaciones?: string;
}

export interface PedidoDocument extends Pedido, Document {}

const pedidoSchema = new Schema<PedidoDocument>({
    fecha: { type: Date, default: Date.now, required: true },
    estado: { 
        type: String, 
        enum: ['pendiente', 'en ruta', 'entregado', 'cancelado'], 
        default: 'pendiente', 
        required: true 
    },
    pagado: { type: Boolean, default: false, required: true },
    cliente: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    metodoEnvio: { 
        type: String, 
        enum: ['domicilio', 'recoge en punto'], 
        required: true 
    },
    observaciones: { type: String }
}, {
    timestamps: true
});

// Índices para mejorar el rendimiento de las consultas
pedidoSchema.index({ fecha: 1 });
pedidoSchema.index({ estado: 1 });
pedidoSchema.index({ cliente: 1 });
pedidoSchema.index({ pagado: 1 });

// Método estático para paginación y filtrado
pedidoSchema.statics.getPaginatedPedidos = async function(
    page: number = 1,
    limit: number = 10,
    filters: any = {}
) {
    const skip = (page - 1) * limit;

    const pedidos = await this.find(filters)
        .skip(skip)
        .limit(limit)
        .populate('cliente', 'nombre celular correo direccion ciudad')
        .populate('productos', 'nombre valor');

    const total = await this.countDocuments(filters);

    return {
        pedidos,
        total,
        page,
        totalPages: Math.ceil(total / limit)
    };
};

const Order = models.Order || model<PedidoDocument>('Order', pedidoSchema);

export default Order; 

*/

import { Schema, model, models, Document, Types } from 'mongoose';
import { UsuarioDocument } from './User';
import { ProductoDocument } from './Product'

export interface Pedido {
    fecha: Date;
    estado: 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
    pagado: boolean;
    cliente: Types.ObjectId | UsuarioDocument;
    productos: (Types.ObjectId | ProductoDocument)[];
    metodoEnvio: 'domicilio' | 'recoge en punto';
    observaciones?: string;
}

export interface PedidoDocument extends Pedido, Document {}

const pedidoSchema = new Schema<PedidoDocument>({
    fecha: { type: Date, default: Date.now, required: true },
    estado: { 
        type: String, 
        enum: ['pendiente', 'en ruta', 'entregado', 'cancelado'], 
        default: 'pendiente', 
        required: true 
    },
    pagado: { type: Boolean, default: false, required: true },
    cliente: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    metodoEnvio: { 
        type: String, 
        enum: ['domicilio', 'recoge en punto'], 
        required: true 
    },
    observaciones: { type: String }
}, {
    timestamps: true
});

const Order = models.Order || model<PedidoDocument>('Order', pedidoSchema);

export default Order;