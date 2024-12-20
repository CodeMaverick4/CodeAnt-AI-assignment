import { BookText, Cloudy, CodeXml, Headset, House, LogOut, Settings } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  

  return (
    <div className={`h-full bg-white transition-all duration-300 px-6 py-5 hidden md:block`}>
        <h1 className="text-center text-3xl">CodeAnt AI </h1>
      {/* Sidebar Links */}
      <nav className="flex flex-col justify-between h-full">
        {/* Top Links */}
        <ul className="space-y-4 mt-8">
          <li className="">
            <a href="#" className="hover:text-purple-600 flex items-center gap-3"> <House size={19}/>
              All Repos
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-purple-600 flex items-center gap-3">
            <CodeXml size={19}/> AI Code Review
            </a>
          </li>

          <li className="">
            <a href="#" className="hover:text-purple-600 flex items-center gap-3">
            <Cloudy size={19}/> Colud Sequerity 
            </a>
          </li>
          
          <li className="">
            <a href="#" className="hover:text-purple-600 flex items-center gap-3">
             <BookText size={19}/> How to Use
            
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-purple-600 flex items-center gap-3">
            <Settings size={19}/> Setting
            
            </a>
          </li>
          
        </ul>

        {/* Bottom Links */}
        <ul className="space-y-4 mb-8">
        <li className="">
            <a href="#" className=" hover:text-purple-600 gap-3 flex items-center "><Headset size={19}/> Support
            </a>
          </li>
          <li className="">
            <a href="#" className="flex items-center gap-3 hover:text-purple-600"> <LogOut size={19}/>
              Logout
            </a>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
