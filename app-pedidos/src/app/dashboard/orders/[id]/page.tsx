
"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { getorder } from '@/lib/apiclientOrder';
import Loading from '@/components/loading';
import { IOrderdetails } from '@/interfaces/order';
import { InformationCircleIcon } from '@heroicons/react/24/outline'; 

const OrderDetails = () => {
  const param = useParams();
  const id = param.id as string;
  const [order, setOrder] = useState<IOrderdetails>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrder = async () => {
    try {
      setLoading(true);
      const data = await getorder(id as string);
    
      setOrder(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadOrder();
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error al cargar la orden: {error}</div>;
  }
  return(
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="container mx-auto py-8 px-4 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
      <InformationCircleIcon className="h-8 w-8 mr-3 text-blue-500" />
      Detalles de la Orden
    </h1>
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Información del Cliente:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-medium">Nombre:</span> {order.cliente.nombre }</p>
            <p><span className="font-medium">Correo:</span> {order.cliente.correo}</p>
            <p><span className="font-medium">Celular:</span> {order.cliente.celular}</p>
            <p><span className="font-medium">Dirección:</span> {order.cliente.direccion}</p>
            <p><span className="font-medium">Ciudad:</span> {order.cliente.ciudad}</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Estado de la Orden:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p className="text-gray-700"><span className="font-medium">Estado:</span> {order.estado}</p>
          <p className="text-gray-700"><span className="font-medium">Pago:</span> {order.pagado ? 'Pagado' : 'Pendiente de pago'}</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Productos:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {order.productos.map(producto => (
              <li key={producto._id}>
                {producto.nombre} - <span className="font-medium">Valor:</span> {producto.valor}
              </li>
            ))}
          </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Método de Envío:</h2>
          <p className="text-gray-700">{order.metodoEnvio}</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Observaciones:</h2>
          <p className="text-gray-700">{order.observaciones}</p>
        </section>
      </div>
    </div>
  </div>
</div>)

};

export default OrderDetails;

