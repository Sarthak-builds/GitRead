import React from "react";
import { Github } from 'lucide-react';

function Navbar() {


    return (
        <div className="h-15 w-full  px-35 py-10 mb-20 flex justify-between items-center text-xl text-white font-grotesk">
          <div className="text-2xl font-bold">WebLens</div>
          <div className="flex gap-4">
            <Github color="white" size={28}/>
            <Github color="white" size={28}/>
          </div>
        </div>
    )
}

export default Navbar;