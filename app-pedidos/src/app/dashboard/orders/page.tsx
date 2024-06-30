import React from 'react';

const orders = [
  {
    id: 1,
    numero: 'Orden 1',
    cliente: 'Cliente 1',
  },
  {
    id: 2,
    numero: 'Orden 2',
    cliente: 'Cliente 2',
  },
  {
    id: 3,
    numero: 'Orden 3',
    cliente: 'Cliente 3',
  },
  {
    id: 4,
    numero: 'Orden 4',
    cliente: 'Cliente 4',
  },
  {
    id: 5,
    numero: 'Orden 5',
    cliente: 'Cliente 5',
  },
];

const OrdersList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Órdenes</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{order.numero}</p>
                  <p className="text-gray-600">{order.cliente}</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Ver Detalles
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersList;
