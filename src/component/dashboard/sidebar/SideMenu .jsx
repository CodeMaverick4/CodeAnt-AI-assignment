import { BookText, Cloudy, CodeXml, Headset, House, LogOut, Settings } from "lucide-react";
import React from "react";
import Dropdown from "../DropdownForSidebarNavBar";
import Logo from "../../Logo";

const SideMenu  = () => {
  

  return (
    <div className={`h-full bg-white transition-all duration-300 px-6 py-5 hidden md:block`}>
        
        <Logo/>

      {/* Sidebar Links */}
      <nav className="flex flex-col justify-between h-full">
        
        <div className="flex flex-col gap-3 items-start mt-8 w-full">
        <Dropdown/>          
        <div className="w-full">
            <div className="bg-blue-600 text-white py-2 px-3 rounded-lg w-full">
              <a href="#" className="flex items-center gap-3 "> <House size={19}/>Repositories</a>
            </div>

            <div className="py-2 px-3 rounded-lg w-full"> 
              <a href="#" className="flex items-center gap-3"> <CodeXml size={19}/> AI Code Review </a>
            </div>
          
            <div className="py-2 px-3 rounded-lg w-full">
              <a href="#" className="flex items-center gap-3"> <Cloudy size={19}/> Cloud Security </a>
            </div>
          
            <div className="py-2 px-3 rounded-lg w-full">
              <a href="#" className="flex items-center gap-3"> <BookText size={19}/> How to Use </a>
            </div>

            <div className="py-2 px-3 rounded-lg w-full">
              <a href="#" className="flex items-center gap-3"> <Settings size={19}/> Setting</a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className=" mb-8">
          <div className="py-2 px-3 rounded-lg w-full">
            <a href="#" className="  gap-3 flex items-center "><Headset size={19}/> Support </a>
          </div>
          <div className="py-2 px-3 rounded-lg w-full">
            <a href="#" className="flex items-center gap-3"> <LogOut size={19}/>
              Logout
            </a>
          </div>         
        </div>

      </nav>
    </div>
  );
};

export default SideMenu ;
