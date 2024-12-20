import React from "react";

const RepositoryCard = ({ repo }) => {
  return (
    <div className="bg-white shadow rounded p-4 hover:bg-gray-50 transition">
      {/* Repository Name and Visibility */}
      <div className="flex gap-3 items-center mb-3">
        <h2 className="sm:text-xl text-3xl font-semibold">{repo.name}</h2>
        <span
          className={`sm:text-sm  text-xl font-medium px-2 py-1 rounded ${
            repo.visibility === "Public"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {repo.visibility}
        </span>
      </div>

      {/* Technologies, Size, Last Updated */}
      <div className="flex items-center gap-3 text-xl sm:text-sm ">
        {/* Technologies */}
        <div>
          <span className="font-semibold">{repo.technologies.join(", ")}</span>
        </div>

        {/* Size */}
        <div>
          <span className="font-semibold">{repo.size}</span> 
        </div>

        {/* Last Updated */}
        <div>
          <span className="font-semibold">{repo.lastUpdated}</span> 
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
