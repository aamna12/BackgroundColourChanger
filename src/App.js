import './App.css';
import React, {useState} from "react";

function App() {

  const [col,setCol]=useState("black");
  
  return (
   <>
   <div className="w-full h-screen flex items-center justify-center" style={{backgroundColor:col}}>
    <div className='bg-white p-3 border-[1px] rounded-md flex items-center justify-center border-black'>

      <button className='bg-blue-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-blue-500 hover:bg-white hover:border-[1.5px] hover:border-blue-500 hover:p-3'
       onClick={()=>setCol("blue")}>Blue</button>

      <button className='bg-green-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-green-500 hover:bg-white hover:border-[1.5px] hover:border-green-500 hover:p-3'
      onClick={()=>setCol("green")}>Green</button>

      <button className='bg-red-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-red-500 hover:bg-white hover:border-[1.5px] hover:border-red-500 hover:p-3'
      onClick={()=>setCol("red")}>Red</button>

      <button className='bg-pink-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-pink-500 hover:bg-white hover:border-[1.5px] hover:border-pink-500 hover:p-3'
      onClick={()=>setCol("pink")}>Pink</button>

      <button className='bg-orange-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-orange-500 hover:bg-white hover:border-[1.5px] hover:border-orange-500 hover:p-3'
      onClick={()=>setCol("orange")}>Orange</button>

      <button className='bg-black p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-black hover:bg-white hover:border-[1.5px] hover:border-black hover:p-3'
      onClick={()=>setCol("black")}>Black</button>

      <button className='bg-yellow-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-yellow-500 hover:bg-white hover:border-[1.5px] hover:border-yellow-500 hover:p-3'
      onClick={()=>setCol("yellow")}>Yellow</button>

      <button className='bg-purple-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-purple-500 hover:bg-white hover:border-[1.5px] hover:border-purple-500 hover:p-3'
      onClick={()=>setCol("purple")}>Purple</button>

      <button className='bg-gray-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-gray-500 hover:bg-white hover:border-[1.5px] hover:border-gray-500 hover:p-3'
      onClick={()=>setCol("gray")}>Gray</button>

      <button className='bg-indigo-500 p-2 text-lg w-20 ml-2 text-white rounded-lg hover:text-indigo-500 hover:bg-white hover:border-[1.5px] hover:border-indigo-500 hover:p-3'
      onClick={()=>setCol("indigo")}>Indigo</button>
    </div>
   </div>
   </>
  );
}

export default App;
