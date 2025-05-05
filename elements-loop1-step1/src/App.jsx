import { useState, useEffect } from "react";

const App = () => {

    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <>
           <div className="w-[900px] h-[170px] bg-white border-4 border-gray-200 rounded-md flex items-center px-8">
                {
                    width > 1000 ? (
                        <div className="h-[80px] w-[580px] bg-[#5797FF] rounded-md flex justify-between items-center">
                    <p className="text-2xl px-auto text-white mx-4">Sort by price</p>
                    <p className="text-2xl text-center h-[72px] bg-white flex items-center p-5 cursor-pointer hover:z-1 hover:bg-blue-100">Sort by name</p>
                    <p className="text-2xl text-center h-[72px] bg-white flex items-center p-6 cursor-pointer mr-1 hover:bg-blue-100">Sort by relevance</p>
                </div>
                    ):(
                        <div className="h-[80px] w-full bg-[#5797FF] rounded-md flex justify-between items-center">
                    <select className="w-[820px] outline-0 text-2xl h-[72px] bg-white ml-1 px-8">
                        <option>Sort by price</option>
                        <option>Sort by name</option>
                        <option>Sort by relevance</option>
                    </select>
                </div>
                    )
                }
           </div>
        </>
    )
}

export default App