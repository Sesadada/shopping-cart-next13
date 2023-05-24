"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import products from "@/utils/products";
import { BiEuro } from "react-icons/bi";
import Image from "next/image";
import useCart from "@/app/(store)/store";

const ProductPage = ({ params: { productId } }) => {
  const cartStore = useCart();
  const [state, setState] = useState();

  const filtering = () => {
    const [result] = products.filter((prod) => prod._id == productId);
    setState(result);
  };

  useEffect(() => {
    filtering();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full pt-20 ">
      <div className="flex grow">
        {state && (
          <Image
            style={{ objectFit: "cover" }}
            src={state.image}
            alt={state.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto "
          />
        )}
      </div>
      <div className="bg-white flex flex-col grow">
        <div className="p-8">
          <h3 className="font-black text-3xl sm:text-5xl pb-6 ">
            {state && state.name}
          </h3>
          <h4 className="border p-4 font-medium text-1xl mb-8 rounded-md">
            {state && state.description}
          </h4>
          <div className="border p-4 rounded-md">
            <h6 className="  font-black text-4xl flex items-center">
              {state && state.price} <BiEuro />{" "}
            </h6>
            <p className="text-sm font-medium flex items-center ">
              + 10 <BiEuro /> flat shipping fee
            </p>
            <p className="text-xs font-normal pt-4">
              If you buy up to 4 products, the shipping fee will be only 10
              euros
            </p>
          </div>
          <div className="flex justify-around gap-1">
            <button
              onClick={() => cartStore.addItemToCart({ newItem: state })}
              className="focus:outline-none  my-10 bg-primary  hover:shadow-md hover:bg-primaryHover text-white font-medium py-2 px-4 rounded-full shadow-xl"
            >
              Add to cart
            </button>{" "}
            <Link href="/products">
              <button className="focus:outline-none my-10 bg-secondary hover:shadow-md hover:bg-secondaryHover text-white font-medium py-2 px-4 rounded-full shadow-xl">
                Continue Shopping
              </button>
            </Link>
            <Link href="/cart">
              <button className="focus:outline-none my-10 bg-grey-200 hover:shadow-md hover:bg-primary text-black font-medium py-2 px-4 shadow-xl  rounded-full border">
                Check Out
              </button>
            </Link>
          </div>
          <div className="border p-4 rounded-md">
            <h3 className="font-medium">
              {cartStore.cart.length === 0
                ? "Your cart is empty! :("
                : "Currently in your cart: "}
            </h3>
            <div className="py-4">
              {cartStore.cart.map((item, index) => (
                <div key={index}>
                  {item.name} X {item.count}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
