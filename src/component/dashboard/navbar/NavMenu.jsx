import React, { useState } from "react";
import { Menu, House, CodeXml, Cloudy, BookText, Settings, Headset, LogOut, X } from "lucide-react"; // Import missing icons
import Dropdown from "../DropdownForSidebarNavBar";
import Logo from "../../Logo";

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="relative md:hidden  flex items-center justify-between px-6 py-4 bg-white">
        <Logo />
        {/* Hamburger */}
        <button onClick={() => setShowNav(!showNav)} className="lg:hidden">
          {showNav ? <X/> :<Menu className="w-6 h-6" />}
          
        </button>
      </div>

      {showNav && (
        <div className={`absolute sm:hidden top-16 left-0 w-full bg-white shadow-lg z-40 `}>
          <div className="px-4 mt-8"><Dropdown /></div>
          <div className="flex flex-col gap-3 p-6">
            <span className="flex items-center gap-3">
              <House /> Repositories
            </span>
            <span className="flex items-center gap-3">
              <CodeXml /> AI Code Review
            </span>
            <span className="flex items-center gap-3">
              <Cloudy /> Cloud Security
            </span>
            <span className="flex items-center gap-3">
              <BookText /> How to Use
            </span>
            <span className="flex items-center gap-3">
              <Settings /> Settings
            </span>
            <span className="flex items-center gap-3">
              <Headset /> Support
            </span>
            <span className="flex items-center gap-3">
              <LogOut /> Logout
            </span>
          </div>
        </div>
      )}

    </>
  );
};

export default NavMenu;
