
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