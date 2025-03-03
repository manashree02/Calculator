import React,{useState} from "react";
function App() {
  const [input,setInput]=useState(0);
  const handleOnClick=(value)=>{
    if (value === "DEL") {
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "reset") {
      setInput("0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  }
  return (
    <div className="flex  bg-indigo-900 flex-col items-center justify-center w-full h-screen">
      <h1 className="text-xl text-white">Calculator</h1>
      <div className="flex flex-col gap-4 w-full px-10 py-2">
        <div className=" px-3 w-full py-5 rounded-lg bg-blue-950">
          <p className="flex justify-end text-white text-2xl">{input}</p>
        </div>
        <div className="flex w-full flex-col gap-3 text-2xl font-semibold p-10 rounded-lg bg-blue-950">
        {[
          ["7", "8", "9", "DEL"],
          ["4", "5", "6", "+"],
          ["1", "2", "3", "-"],
          [".", "0", "/", "*"],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-3 justify-between w-full mb-2 ">
            {row.map((btn) => (
              <button className="bg-white w-14 rounded-xl hover:bg-gray-300 transition-all" key={btn} value={btn} onClick={()=>handleOnClick(btn)}>{btn}</button>
            ))}
          </div>
        ))}
          <div className="flex gap-2">
            <button className="bg-indigo-700 rounded  p-2 w-1/3" onClick={()=>handleOnClick("reset")}>Reset</button>
            <button className="bg-red-800 rounded p-2 w-2/3" onClick={()=>handleOnClick("=")}>=</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
