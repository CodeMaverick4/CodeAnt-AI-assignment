import { Database } from "lucide-react";
import React from "react";

const RepositoryCard = ({repo }) => {
  return (
    <div  className="bg-white shadow rounded p-4 hover:bg-gray-200 transition">
      <div className="flex gap-3 items-center mb-3">
        <h2 className="text-xl font-semibold">{repo.name}</h2>
        <span className="text-xs font-medium px-2 py-1 rounded-full border border-[#B2DDFF] bg-[#EFF8FF] text-[#B2DDFF]">
          {repo.visibility}
        </span>
      </div>

      <div className="flex items-center gap-10 text-xs ">
        <div className="flex flex-wrap items-center gap-3">
          {repo.technologies.map(tech => (
            <div className="flex  gap-3 items-center">
              <span>{tech}</span>
              <div className="p-1 bg-blue-600 rounded-full"></div>
            </div>

          ))}

        </div>
        <div>
          <span className="flex items-center gap-2 "><Database size={12} /> {repo.size}</span>
        </div>        
        <div>
          <span className="">Updated {repo.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
