import React from "react";
import { Github, Twitter } from 'lucide-react';

function Navbar() {


    return (
        <div className="h-15 w-full  px-7 sm:px-35 py-10 mb-20 flex justify-between items-center text-xl text-white font-doto">
          <div className="text-lg sm:text-3xl font-bold ">Web<strong className="text-green-400">Lens</strong></div>
          <div className="flex  gap-2  inset-shadow-sm inset-shadow-green-500/50  px-2 py-1  rounded-xl scale-75 sm:scale-100">
          <a href="https://github.com/Sarthak-builds/WebLens">
          <Github color="white" size={32} className="hover:bg-green-800 p-1 rounded-lg"/></a>
            <a href="https://x.com/Sarthakbuilds" className="w-8 text-white">
            <img src="./src/assets/x.png" className="text-white hover:bg-green-800 rounded-lg p-1"></img>
            {/* <Twitter color="white" size={32} className="hover:bg-green-600 p-1 rounded-lg"/> */}
            </a>
          </div>
        </div>
    )
}

export default Navbar;