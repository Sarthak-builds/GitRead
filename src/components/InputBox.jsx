

function InputBox() {

    return (
        <div className="w-4xl border-1 h-fit rounded-xl text-green-600 flex flex-col px-12 py-4 justify-center items-center gap-4 text-xl ">
           
                <label> Github Repository URL :</label>
                <input placeholder="git//hub//collection"   className="bg-green-900/30 w-full py-2 px-5 outline-0 rounded-md "></input>
     </div>
     
    )
}

export default InputBox;