"use client";
import { useEffect, useState } from "react";
import { BiEuro } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import useCart from "../(store)/store";

const Cart = () => {
  const cartStore = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    // Remove duplicate items in the cart and calculate the final price
    const uniqueItems = [];
    const itemMap = new Map();
    let totalPrice = 0;

    for (const item of cartStore.cart) {
      if (!itemMap.has(item._id)) {
        itemMap.set(item._id, true);
        uniqueItems.push(item);
        totalPrice += item.price * item.count;
      }
    }

    setCartItems(uniqueItems);
    setTotalPrice(totalPrice);
  }, [cartStore.cart]);

  return (
    <div className="flex justify-center items-center w-screen h-screen mt-32">
      <div className="p-10 bg-primary rounded sm:p-5 md:w-3/4">
        <h3 className="font-medium pb-2 text-2xl text-white text-center sm:text-3xl">
          {cartItems.length === 0
            ? "Your cart is empty!"
            : "Currently in your cart "}
        </h3>
        <div className="py-2 text-center">
          {cartItems.map((item, index) => (
            <div key={index} className="grid">
              <div className="grid grid-cols-3 bg-white rounded-t-lg">
                <Image
                  className="bg-primary w-40 hover:opacity-70 cursor-pointer"
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.name}
                />
                <div className="p-2 m-2 rounded ">
                  <p className="font-bold">Product</p>
                  <p className="text-sm pt-4 md:pt-2 text-left md:text-center">
                    {item.name}
                  </p>
                  <p className="font-bold text-left md:text-center">
                    {" "}
                    X {item.count}
                  </p>
                </div>
                <div className="text-center rounded p-2 m-2">
                  <p className="font-bold">Price </p>
                  <div className="text-1xl pt-4 md:pt-2">
                    <p className="font-bold">
                      {item.price * item.count} {<BiEuro />}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={() =>
                    cartStore.removeItemFromCart({ _id: item._id })
                  }
                  className="focus:outline-none w-2/4 text-sm bg-black hover:bg-red-600 text-white mb-3 rounded-bl-lg"
                >
                  Remove Item
                </button>
                <button
                  onClick={() => cartStore.addItemToCart({ newItem: item })}
                  className="focus:outline-none w-2/4 border text-sm bg-pink-400 hover:bg-pink-600 text-white mb-3 rounded-br-lg"
                >
                  Add Another One
                </button>
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="mt-2">
              <div className=" rounded border mb-2 p-2 flex justify-between bg-white">
                <h6>
                  Shipping of {cartItems.length} product
                  {cartItems.length > 1 && "s"}:{" "}
                </h6>
                <h6 className="mr-4">
                  {shippingCost} {<BiEuro />}
                </h6>
              </div>

              <div className=" rounded border p-2 flex justify-between bg-white">
                <h6>Total: </h6>
                <h6 className="mr-4">
                  {totalPrice + shippingCost} {<BiEuro />}
                </h6>
              </div>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="grid grid-cols-3 gap-1 mt-6">
              <button className="focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                PayPal
              </button>
              <button className="focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                Credit Card
              </button>
              <button className="focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                Apple Pay
              </button>
            </div>
          )}
          <Link href="/products">
            <button className="focus:outline-none my-10 bg-white hover:shadow-md hover:text-white hover:bg-black text-black-600 font-bold py-2 px-4 rounded-full shadow-xl">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
