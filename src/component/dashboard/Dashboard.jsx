import React from 'react';
import SideMenu from "./sidebar/SideMenu ";
import NavMenu from "./navbar/NavMenu"
import { Plus, RefreshCcw, Search } from 'lucide-react';
import RepositoryCard from './RepositoryCard'

export default function Dashboard() {
   const repos = [
      {
        id: 1,
        name: "React Repository",
        visibility: "Public",
        technologies: ["React", "JavaScript"],
        size: "1.2 MB",
        lastUpdated: "1 Day ago",
      },
      {
        id: 2,
        name: "Tailwind CSS Repository",
        visibility: "Private",
        technologies: ["Tailwind CSS", "HTML"],
        size: "500 KB",
        lastUpdated: "1 Day ago",
      },
      {
        id: 3,
        name: "JavaScript Repository",
        visibility: "Public",
        technologies: ["JavaScript", "Node.js"],
        size: "3 MB",
        lastUpdated: "1 Day ago",
      },
    ] ;


  return (
    <>
      <NavMenu />
      <div className="flex  h-screen overflow-hidden">

        <SideMenu />
        {/* <RepositoryList/> */}

        <div className="p-6 bg-white sm:m-3 rounded-xl flex-grow overflow-y-scroll">
          {/* Heading */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between mb-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <span className="text-sm ml-4 ">{repos.length} Total Repositries</span>
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-300  rounded-lg text-sm  flex items-center gap-3">
                <RefreshCcw size={16} /> Refresh All
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 flex items-center gap-3" >
                <Plus size={16} /> Add Repository
              </button>

            </div>


          </div>
          <div className="relative mb-4 ">
            <input type="text" className="z-10 sm:w-96 border border-gray-400 w-full p-3 rounded-lg pl-10" placeholder="Search Repositories.." />
            <Search className="absolute top-3 left-2" />
          </div>

          {/* Repository List */}
          <div className="grid gap-4">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
