'use client';

import { useEffect, useState } from "react";

const Footer = () => {
    const [color, setColor] = useState("black")
const [textColor, setTextColor] = useState("white")
    useEffect(() => {
        const changeColor = () => {
            console.log(window.screenY)
          if(window.scrollY >= 90){
            setColor("transparent")
            setTextColor("transparent")
           
          } else {
            setColor("black")
            setTextColor("white")
          }
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

          if (scrollTop + clientHeight >= scrollHeight) {
            setColor("black");
            setTextColor("white")
          }
        }
        console.log(color)
        window.addEventListener("scroll", changeColor)
    
        return window.removeEventListener("scroll", changeColor, true)
      }, [])



	return (
		<footer>
			<div className=' fixed w-full inset-x-0 bottom-0'>
				<div style={{backgroundColor: color, color: textColor}} className='flex justify-center items-center h-10 '>
					Copyright @ Serena Olivieri
				</div>
			</div>
		</footer>
	);
};

export default Footer;