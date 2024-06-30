import React from 'react'; 


const order = {
  numero: 'Orden 1',
  cliente: 'Cliente 1',
};

const OrderDetails = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Detalles de la Orden</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">{order.numero}</p>
          <p className="text-gray-600">{order.cliente}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;