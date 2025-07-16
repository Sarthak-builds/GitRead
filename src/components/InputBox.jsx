import { useEffect, useState } from "react";
import { usePageSpeed } from "../Services/pageSpeedStore";

function InputBox() {

const { data,loading, error, fetchData} = usePageSpeed();

function handleSubmit() {
    fetchData(`https://frontendnation.com/`);
}
useEffect(()=>{
    if(loading) {
        console.log(`is loading...wait for it`);
    }
  console.log(data);
},[data])
    return (
        <div className="w-4xl border-1 h-fit rounded-xl text-green-600 flex flex-col px-12 py-4 justify-center items-center gap-4 text-xl ">
           
              
               <button  onClick={handleSubmit}>Submit</button>
     </div>
     
    )
}

export default InputBox;