import React from 'react';
import { OrderData } from '../../CustomHooks/OrderData/OrderData';

const OrderList = () => {
  const { order, isLoading, error } = OrderData();
console.log(order);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-6 w-full bg-black text-white h-screen">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="">
            <th className="border px-4 py-2">Mobile Number</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Food ID</th>
            <th className="border px-4 py-2">Food Name</th>
            <th className="border px-4 py-2">Food Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {order.map((orderItem, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{orderItem.mobile}</td>
              <td className="border px-4 py-2">{orderItem.name}</td>
              <td className="border px-4 py-2">{orderItem.order_id}</td>
              <td className="border px-4 py-2">{orderItem.items[0].food_id}</td>
              <td className="border px-4 py-2">{orderItem.items[0].food_name}</td>
              <td className="border px-4 py-2">{orderItem.items[0].food_price}</td>
              <td className="border px-4 py-2">{orderItem.items[0].quantity}</td>
              <td className="border px-4 py-2">{orderItem.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;

