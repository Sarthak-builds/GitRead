import React from "react";
import { Github, Twitter } from 'lucide-react';

function Navbar() {


    return (
        <div className="h-15 w-full  px-35 py-10 mb-20 flex justify-between items-center text-xl text-white font-grotesk">
          <div className="text-2xl font-bold">WebLens</div>
          <div className="flex gap-4 bg-black px-4 py-2 rounded-xl">
            <Github color="white" size={32} className="hover:bg-green-600 p-1 rounded-lg"/>
            <Twitter color="white" size={32} className="hover:bg-green-600 p-1 rounded-lg"/>
          </div>
        </div>
    )
}

export default Navbar;