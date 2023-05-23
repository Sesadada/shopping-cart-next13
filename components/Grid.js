import React from "react";
import products from "@/utils/products";
import Link from "next/link";
import Image from "next/image";

const Grid = ({ refe }) => {
  return (
    <div
      ref={refe}
      className="grid lg:grid-cols-3 z-50 md:grid-cols-2 sm:grid-cols-1 md:pt-20 bg-black"
    >
      {products.map((prod) => {
        return (
          <Link key={prod._id} href={`/products/${prod._id}`}>
            <Image
              className="bg-primary w-full hover:opacity-70 cursor-pointer"
              src={prod.image}
              width={500}
              height={500}
              alt="Picture of the author"
            />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Grid;
