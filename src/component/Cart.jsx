import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, minus, remove } from "../store/cartTotal";
export default function Cart() {
  const listCart = useSelector((state) => state.cart.value);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const [totalPay, setTotalPay] = useState();
  console.log(total);
  const handleTotalCart = () => {
    let total1 = listCart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotalPay(total1);
  };
  useEffect(() => {
    handleTotalCart();
  }, [listCart]);

  const handleMinus = (item) => {
    dispatch(minus(item));
  };
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  return (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listCart.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={item.image}
                              alt="Product image"
                            />
                            <span className="font-semibold">
                              {item.productName}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">{item.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2"
                              onClick={() => handleMinus(index)}
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {item.quantity}
                            </span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2"
                              onClick={() => handleAdd(index)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">{item.quantity * item.price}</td>
                        <td className="py-4">
                          <button
                            onClick={() => handleRemove(index)}
                            className="border rounded-md py-2 px-4 ml-2"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{total == 0 ? totalPay : total}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>0</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{total}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
