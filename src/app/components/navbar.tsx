"client";

import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const link = [
    {
      name: "about",
      to: "#about",
    },
    {
      name: "Skills",
      to: "#skills",
    },
    {
      name: "Portafolio",
      to: "#portafolio",
    },
  ];
  const [abrir, setAbrir] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const handleLinkClick = () => {
    setAbrir(false); // Cierra el navbar al hacer clic en un enlace
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current?.contains(event.target as Node)) {
      setAbrir(false); // Cierra el navbar al hacer clic fuera de él
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Escucha clics en el documento
    return () => {
      document.removeEventListener("click", handleClickOutside); // Limpia el evento al desmontar
    };
  }, []);
  return (
    <>
      <header
        ref={navRef}
        className="   fixed z-20   w-full flex justify-center items-center px-8 mt-[20px] "
      >
        <div className=" bg-black  backdrop-blur-xl w-full  flex justify-between items-center max-w-[1200px]   rounded-lg  px-8 py-4">
          <div>
            <p className=" text-xl text-white  font-bold">
              Bonnie <span className=" text-cyan-500">Dev</span>
            </p>
          </div>
          <nav className=" hidden lg:block">
            <ul>
              {link?.map((item) => (
                <li key={item.name} className=" inline-block  p-2">
                  <a
                    onClick={handleLinkClick}
                    href={item.to}
                    className=" transform text-lg  font-bold    text-white rounded-md  p-2 hover:bg-black  hover:text-cyan-500    hover:scale-105 transition duration-300"
                  >
                    {" "}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div onClick={()=>setAbrir(!abrir)} className=" z-40 cursor-pointer block lg:hidden ">
            <IoMenu size={25} color="white" />
          </div>
        </div>
      </header>

      <nav
        style={{
          transform: abrir ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
        }}
        className="   z-40   justify-center  items-center flex gap-7  shadow shadow-white/30 rounded bg-black  fixed top-0  left-0  h-[400px] w-full  lg:hidden"
      >
        <div onClick={()=>setAbrir(!abrir)} className="  cursor-pointer absolute right-12 top-12 ">
          <IoMenu size={25} color="white" />
        </div>
        <ul>
          {link?.map((item) => (
            <li key={item.name} className="   p-2">
              <a
                href={item.to}
                className=" transform text-lg  font-bold    text-white rounded-md  p-2 hover:bg-black  hover:text-cyan-500    hover:scale-105 transition duration-300 "
              >
                {" "}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
