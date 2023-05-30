"use client";
import { useEffect, useState } from "react";
import { BiEuro } from "react-icons/bi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import useCart from "../(store)/store";

const Cart = () => {
  const cartStore = useCart();

  const total = (tot) => {
    let temp = 0;
    tot.forEach((i) => {
      if (i.count === 1) {
        temp += i.price;
      } else {
        temp += i.price * i.count;
      }
    });
    return temp;
  };

  const shipping = (n) => {
    return n > 3 ? 15 : n * 10;
  };

  useEffect(() => {
    console.log("store", cartStore.cart);
    console.log("count", cartStore.count);
    console.log(total(cartStore.cart));
  }, [cartStore.cart]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className=" sm:p-5 md:w-2/4  ">
        <h3 className="font-medium text-lg mb-4 text-center sm:text-3xl">
          {cartStore.cart.length === 0
            ? "Your cart is empty!"
            : "Currently in your cart "}
        </h3>
        <div>
          {cartStore.cart.map((item, index) => (
            <div key={index} className="flex w-full">
              <div className="flex bg-white rounded-md my-1 border w-full">
                <Image
                  className="hover:opacity-70 cursor-pointer rounded-md p-1"
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                <div className="flex w-full p-2">
                  <div className=" w-full flex   items-center justify-around">
                    <p className="text-sm md:text-md lg:text-lg font-bold">
                      {item.name}
                    </p>
                    <p className="text-sm md:text-md lg:text-lg font-bold flex w-10">
                      ({item.count})
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-2 ">
                    <AiOutlineMinusCircle
                      size={20}
                      className="text-primary mx-2"
                      onClick={() =>
                        cartStore.removeItemFromCart({ _id: item._id })
                      }
                    />
                    <AiOutlinePlusCircle
                      size={20}
                      className="text-primary"
                      onClick={() => cartStore.addItemToCart({ newItem: item })}
                    />
                  </div>
                  <div className=" flex  items-center justify-center px-4">
                    <p className="font-bold items-center text-center text-sm md:text-md">
                      {item.price * item.count}
                    </p>
                    <p className="font-bold items-center text-center text-sm md:text-md">
                      {<BiEuro />}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {cartStore.cart.length > 0 && (
            <div className="mt-2">
              <div className=" rounded border mb-2 p-2 flex justify-between bg-white text-sm md:text-md">
                <h6>
                  Shipping of {cartStore.count} product
                  {cartStore.count > 1 && "s"}:{" "}
                </h6>
                <h6 className="mr-4 flex">
                  {shipping(cartStore.count)} {<BiEuro />}
                </h6>
              </div>

              <div className=" rounded border p-2 flex justify-between bg-white text-sm md:text-md">
                <h6>Total: </h6>
                <h6 className="mr-4 flex">
                  {total(cartStore.cart) + shipping(cartStore.count)}{" "}
                  {<BiEuro />}
                </h6>
              </div>
            </div>
          )}

          {cartStore.cart.length > 0 && (
            <div className="grid grid-cols-3 gap-1 mt-6">
              <button className="border-2 border-primary bg-white hover:shadow-md  text-primary  font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                PayPal
              </button>
              <button className=" border-2 border-primary bg-white hover:shadow-md  text-primary   font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                Credit Card
              </button>
              <button className="border-2 border-primary bg-white hover:shadow-md   text-primary  font-bold py-1 px-4 rounded-full shadow-xl mt-4">
                Apple Pay
              </button>
            </div>
          )}
          <Link href="/products">
            <button className="focus:outline-none my-4 bg-primary py-2 hover:shadow-md  hover:bg-black text-white font-bold  px-4 rounded-full shadow-xl w-full">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
