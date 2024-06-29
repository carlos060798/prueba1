import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

// Función para conectar a la base de datos
const connectBd = async () => {
  try {
    if (!url) {
      throw new Error('No se encontró la variable de entorno MONGODB_URI');
    }

    await mongoose.connect(url);
    console.log('Conexión a MongoDB exitosa:', url);
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Salir del proceso con error
  }
};

export default connectBd;