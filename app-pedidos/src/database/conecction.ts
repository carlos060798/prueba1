import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Función para conectar a la base de datos
const connectBd= async () => {
  try {
    const url= process.env.MONGODB_BD||  ""
    await mongoose.connect(url)
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Salir del proceso con error
  }
};

export default connectBd;