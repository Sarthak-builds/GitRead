import { useEffect, useState } from "react";
import { usePageSpeed } from "../Services/pageSpeedStore";
import {motion} from 'motion/react';
function InputBox() {
const [ url, setUrl ] = useState("");
const { data,loading, error, fetchData} = usePageSpeed();

const handleSubmit = (e) => {
    e.preventDefault();
    if(!url) {alert('Enter a URL');
        return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
            alert('Please enter a valid URL starting with http:// or https://');
            return;
          }
   fetchData(url);
    // fetchData(`https://frontendnation.com/`);
}
const handleInputChange= (e) => {
    setUrl(e.target.value)
}
 useEffect(() => {
          if (loading) {
            console.log('Fetching PageSpeed data...');
          }
          if (data) {
            console.log('PageSpeed Data:', data);
          }
          if (error) {
            console.log('Error:', error);
          }
        }, [data, loading, error]);
    return (
        <motion.form onSubmit={handleSubmit} className="w-full flex justify-center items-center opacity-0" transition={{delay:0.5, duration:1}} whileInView={{opacity:1}}>
        
        <div className="w-4xl border-1 h-fit rounded-xl text-green-600 flex flex-col px-12 py-4 justify-center items-center gap-4 text-xl mb-20 font-grotesk bg-green-600/10" >
            <label htmlFor="input" className="">Enter a Website URL</label>
           <input id="input"type="text" className="w-full h-10 bg-green-600/10 px-3 py-1 rounded-md outline-0" placeholder="http://google.com" value={url} onChange={handleInputChange}></input>
              
               <button type="submit" className="border-2 py-1 px-3 rounded-lg" disabled={loading}>Submit</button>
     </div>
     </motion.form>
    )
}

export default InputBox;