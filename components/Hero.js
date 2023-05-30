"use client";
import React, { useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = ({ handle }) => {
  const [color, setColor] = useState("black");
  const [typo, setTypo] = useState("text-opacity-100");
  const [visible, setVisible] = useState(true);
  const isBrowser = () => typeof window !== "undefined";
  const w = typeof window !== "undefined" && window.innerWidth;
  const h = typeof window !== "undefined" && window.innerHeight;

  useEffect(() => {
    if (isBrowser) {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setTypo("text-opacity-0");
          setColor("transparent");
          if (window.scrollY >= 110) {
            setVisible(false);
          }
        } else {
          setColor("black");
          setTypo("text-opacity-100");
          if (window.scrollY <= 110) {
            setVisible(true);
          }
        }
      };
      window.addEventListener("scroll", changeColor);

      return window.removeEventListener("scroll", changeColor, true);
    }
  }, []);
  return (
    <div className="w-full h-full">
      {visible && (
        <div
          className={`md:py-8 py-2 bg-${color} w-full fixed top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2  justify-center flex flex-col items-center ease-in-out duration-300`}
        >
          <h3
            className={`text-white ${typo} font-thin md:text-5xl text-lg text-center`}
          >
            Tote Bags & Tea Towels made with a spell
          </h3>
          <h1
            className={`text-white ${typo} font-black md:text-9xl text-4xl md:p-10 p-4 text-center`}
          >
            Buy Yours
          </h1>
          <AiOutlineArrowDown
            onClick={handle}
            size={80}
            style={{ opacity: color === "black" ? 100 : 0 }}
            className={`animate-bounce cursor-pointer text-white ${color}`}
          />
        </div>
      )}

      <CldImage
        width={w}
        height={h}
        src="cartImages/IMG_1"
        sizes="200vw"
        alt="Double color tea towel"
      />
    </div>
  );
};

export default Hero;
