/*import { Schema, model, models, Document } from 'mongoose'; 

export interface Usuario {
    nombre: string;
    correo: string;
    celular: string;
    direccion: string;
    ciudad: string;
}

export interface UsuarioDocument extends Usuario, Document {}

const usuarioSchema = new Schema<UsuarioDocument>({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    celular: { type: String, required: true },
    direccion: { type: String, required: true },
    ciudad: { type: String, required: true },
});

const User = models.User || model<UsuarioDocument>('User', usuarioSchema);

export default User;

*/


import { Schema, model, models, Document } from 'mongoose';

export interface Usuario {
    nombre: string;
    correo: string;
    celular: string;
    direccion: string;
    ciudad: string;
}

export interface UsuarioDocument extends Usuario, Document {}

const usuarioSchema = new Schema<UsuarioDocument>({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    celular: { type: String, required: true },
    direccion: { type: String, required: true },
    ciudad: { type: String, required: true },
}, { 
    timestamps: true 
});

const User = models.User || model<UsuarioDocument>('User', usuarioSchema);

export default User;