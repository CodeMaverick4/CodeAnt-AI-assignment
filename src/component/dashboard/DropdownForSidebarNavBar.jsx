import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("John Doe");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full text-left">
      {/* Button to toggle dropdown */}
      <button onClick={toggleDropdown} className="flex items-center justify-between w-full border border-gray-300 px-2 py-2 rounded-md focus:outline-none" >
        {selectedName}
        <ChevronDown/>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-white border rounded-md  z-10">
          <ul className="py-1">
            <li onClick={()=>{
                setSelectedName('John Doe');
                setIsOpen(!isOpen);
                }}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">John Doe</li>
            <li onClick={()=>{
                setSelectedName('Jane Smith');
                setIsOpen(!isOpen);
                }}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jane Smith</li>
            <li onClick={()=>{
                setSelectedName('Samuel Green');
                setIsOpen(!isOpen);
                }}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Samuel Green</li>
            <li onClick={()=>{
                setSelectedName('Emily White');
                setIsOpen(!isOpen);
                }}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Emily White</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
