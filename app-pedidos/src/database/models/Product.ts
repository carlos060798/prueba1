/*import { Schema, model, models, Document } from 'mongoose';

export interface Producto {
    nombre: string;
    valor: number;
    inventario: number;
}

export interface ProductoDocument extends Producto, Document {}

const productoSchema = new Schema<ProductoDocument>({
    nombre: { type: String, required: true },
    valor: { type: Number, required: true },
    inventario: { type: Number, required: true },
});

const Product = models.Product || model<ProductoDocument>('Product', productoSchema);

export default Product;

*/ 

import { Schema, model, models, Document } from 'mongoose';

export interface Producto {
    nombre: string;
    valor: number;
    inventario: number;
}

export interface ProductoDocument extends Producto, Document {}

const productoSchema = new Schema<ProductoDocument>({
    nombre: { type: String, required: true },
    valor: { type: Number, required: true },
    inventario: { type: Number, required: true },
}, { 
    timestamps: true 
});

const Product = models.Product || model<ProductoDocument>('Product', productoSchema);

export default Product;