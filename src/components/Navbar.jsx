import React from "react";
import { Github } from 'lucide-react';

function Navbar() {


    return (
        <div className="h-15 w-full  px-35 py-10 flex justify-between items-center text-xl text-white">
          <div></div>
          <div className="flex gap-4">
            <Github color="white" size={28}/>
            <Github color="white" size={28}/>
          </div>
        </div>
    )
}

export default Navbar;