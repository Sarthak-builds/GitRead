import { useEffect, useState } from "react";
import { usePageSpeed } from "../Services/pageSpeedStore";

function InputBox() {

const {loading, data, error, fetchData} = usePageSpeed();

function handleSubmit() {
    fetchData(`https://frontendnation.com/`);
}
useEffect(()=>{
  console.log(data);
},[data])
    return (
        <div className="w-4xl border-1 h-fit rounded-xl text-green-600 flex flex-col px-12 py-4 justify-center items-center gap-4 text-xl ">
           
                <label> Website URL :</label>
                <input placeholder="git//hub//collection"  className="bg-green-900/30 w-full py-2 px-5 outline-0 rounded-md "></input>
               <button type="submit" onClick={handleSubmit}>Submit</button>
     </div>
     
    )
}

export default InputBox;