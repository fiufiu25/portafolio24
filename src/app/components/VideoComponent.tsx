import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";

export default function VideoComponent({ url,setVerVideo }: { url: string,setVerVideo: (ver: boolean) => void }) {
  
  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-screen bg-white/90 flex  justify-center items-center">
      <div
        className=" absolute  cursor-pointer right-4  top-4 bg-white rounded-full p-1 shadow-md"
        onClick={() => setVerVideo(false)}
      >
        <IoClose size={30} color="black" />
      </div>

      <ReactPlayer controls url={url} />
    </div>
  );
}
