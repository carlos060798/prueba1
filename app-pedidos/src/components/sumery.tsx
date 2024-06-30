import { useState, useEffect } from 'react';

interface Metrics {
  orders: number;
  customers: number;
  revenue: number;
  topCity: string;
  bestSellingProduct: string;
}

function  Summary  (){
  const [metrics, setMetrics] = useState<Metrics>({
    orders: 0,
    customers: 0,
    revenue: 0,
    topCity: '',
    bestSellingProduct: ''
  });

  useEffect(() => {
    // Aquí puedes hacer una solicitud a tu API para obtener las métricas
    // setMetrics({
    //   orders: 100,
    //   customers: 50,
    //   revenue: 10000,
    //   topCity: 'Ciudad de México',
    //   bestSellingProduct: 'Producto A'
    // });
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Resumen del Desempeño del Comercio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-indigo-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Número de Pedidos</h3>
          <p className="text-3xl">{metrics.orders}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Número de Clientes</h3>
          <p className="text-3xl">{metrics.customers}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Ingresos del Último Mes</h3>
          <p className="text-3xl">${metrics.revenue.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Ciudad con Más Pedidos</h3>
          <p className="text-2xl">{metrics.topCity}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Producto Más Vendido</h3>
          <p className="text-2xl">{metrics.bestSellingProduct}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;