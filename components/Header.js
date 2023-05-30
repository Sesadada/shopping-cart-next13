"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [changingPoint, setChangingPoint] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setChangingPoint(true);
      } else {
        setChangingPoint(false);
      }
    };
    typeof window !== "undefined" &&
      window.addEventListener("scroll", changeColor);

    return window.removeEventListener("scroll", changeColor, true);
  }, []);
  return (
    <header
      // style={{ backgroundColor: `${color}` }}
      className={` ${
        changingPoint ? "bg-opacity-20" : "bg-opacity-100"
      } z-50 bg-black w-full flex items-center justify-between  ease-in duration-300 fixed left-0 top-0 h-20`}
    >
      <div className="w-full m-auto flex justify-between items-center text-white px-8">
        <Link href="/">
          <h1
            className={`${
              changingPoint ? "text-5xl" : "text-3xl"
            } font-bold ease-in duration-300`}
          >
            WitchCraft
          </h1>
        </Link>

        <ul className="hidden sm:flex items-center ">
          <li>
            <Link href="/products">
              <h2
                className={`${
                  changingPoint ? "text-2xl font-bold" : "text-md"
                } px-4 ease-in duration-300`}
              >
                Store
              </h2>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h2
                className={`${
                  changingPoint ? "text-2xl font-bold" : "text-md"
                } px-4 ease-in duration-300`}
              >
                About
              </h2>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h2
                className={`${
                  changingPoint ? "text-2xl font-bold" : "text-md"
                } px-4 ease-in duration-300`}
              >
                Contact
              </h2>
            </Link>
          </li>
          <li>
            <Link className="p-6 " href="/cart">
              <BsCartFill size={20} className="ml-4" />
            </Link>
          </li>
        </ul>
        {/* Mobile button */}

        <div className="block md:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "white" }} />
          )}
        </div>
        <div
          style={{ left: nav ? "0" : "-100%" }}
          className={`sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}
        >
          <ul className="">
            <li
              className="p-4 text-4xl hover:text-gray-400"
              onClick={handleNav}
            >
              <Link className="p-4" href="/products">
                Store
              </Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-400"
              onClick={handleNav}
            >
              <Link className="p-4" href="/about">
                About
              </Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-400"
              onClick={handleNav}
            >
              <Link className="p-4" href="/contact">
                Contact
              </Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-400"
              onClick={handleNav}
            >
              <Link className="p-4" href="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
