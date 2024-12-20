import React, { useState } from "react";
import RepositoryCard from "./Repocard";
import { Plus, RefreshCcw } from "lucide-react";

const RepositoryList = () => {
  const [repos, setRepos] = useState([
    {
      id: 1,
      name: "React Repository",
      visibility: "Public",
      technologies: ["React", "JavaScript"],
      size: "1.2 MB",
      lastUpdated: "2024-12-19",
    },
    {
      id: 2,
      name: "Tailwind CSS Repository",
      visibility: "Private",
      technologies: ["Tailwind CSS", "HTML"],
      size: "500 KB",
      lastUpdated: "2024-12-18",
    },
    {
      id: 3,
      name: "JavaScript Repository",
      visibility: "Public",
      technologies: ["JavaScript", "Node.js"],
      size: "3 MB",
      lastUpdated: "2024-12-15",
    },
  ]);

  return (
    <div className="p-6 bg-white sm:m-3 rounded-xl flex-grow overflow-y-scroll">
      {/* Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between mb-4">
        <div className="flex flex-col gap-3">
            <h1 className="text-5xl sm:text-2xl font-bold">Repositories</h1>
            <span className="text-xl ml-4 ">{repos.length} Total Repositries</span>
        </div>
        <div >
            <input type="text"  className="border border-gray-400 outline-none w-full p-3 rounded-lg" placeholder="Search Repositories.."/>
        </div>
        <div className="flex gap-4">
            <button className="px-4 py-2 border border-gray-300  rounded-lg sm:text-sm text-xl flex items-center gap-3">
                <RefreshCcw size={16}/> Refresh All
            </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg sm:text-sm text-xl hover:bg-blue-600 flex items-center gap-3" >
          <Plus size={16}/> Add Repository
          </button>
          
        </div>
      </div>

      {/* Repository List */}
      <div className="grid gap-4">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
