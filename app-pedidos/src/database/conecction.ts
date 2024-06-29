/*import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

// Función para conectar a la base de datos
const connectBd = async () => {
  try {
    if (!url) {
      throw new Error('No se encontró la variable de entorno MONGODB_URI');
    }

    await mongoose.connect(url)
    console.log('Conexión a MongoDB exitosa:', url);
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Salir del proceso con error
  }
};

export default connectBd; 

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, define la variable de entorno MONGODB_URI en .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function  connectBd() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Conexión a MongoDB exitosa');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('Error al conectar con MongoDB:', e);
    throw e;
  }

  return cached.conn;
}

export default  connectBd; */ 


// dbConnect.ts
import mongoose from 'mongoose';
import models from './models/models';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function  connectBd() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
  
  // Registra los modelos
  Object.keys(models).forEach(modelName => {
    if (mongoose.modelNames().includes(modelName)) {
      mongoose.deleteModel(modelName);
    }
    mongoose.model(modelName, models[modelName].schema);
  });

  console.log('Conexión a MongoDB exitosa');
}

export default  connectBd;