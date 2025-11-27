import {ProjectData }from "../Data/ProjectData.jsx"
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";

export default function Projects() {
  return (
    <div className="px-4 py-10 max-w-[1200px] mx-auto pt-20">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Some Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">

        {ProjectData.map((item) => (
          <div key={item.id} className="bg-gray-900 rounded-xl p-5 shadow-lg hover:scale-105 duration-300">

            <div className="h-50">
                 <img 
              src={item.image} 
              alt={item.title} 
              className="h-40 w-full object-cover rounded-md mb-4" 
            />
            </div>
           

            
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

          
        

          
            <div className="flex items-center justify-between pt-5">
              <a 
                className="bg-gray-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700 duration-300 flex items-center gap-2"
                href={item.live} target="_blank">
                Live View <CiLocationArrow1 />
              </a>

              <a 
                className="bg-gray-600 text-white font-bold  px-4 py-2 rounded-lg hover:bg-gray-700 duration-300 flex items-center gap-2"
                href={item.github} target="_blank">
                Source Code <IoMdCode />
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

