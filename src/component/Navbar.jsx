import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sm:hidden flex items-center justify-between px-6 py-4 bg-white">
      {/* Company Name */}
      <h1 className="text-3xl font-bold">CodeAnt</h1>

      {/* Hamburger Icon (Visible on Small Screens) */}
      <button className="block sm:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
