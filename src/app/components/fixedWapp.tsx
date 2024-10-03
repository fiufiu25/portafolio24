import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function FixedWapp() {
  return (
    <div className=" fixed   z-20 bottom-5 right-5 cursor-pointer p-2 bg-white rounded-full shadow-md  flex justify-center  items-center">
      <a
        href="  https://wa.link/z2p8h6"
      >
        <IoLogoWhatsapp size={30} color=" green" />
      </a>
    </div>
  );
}
