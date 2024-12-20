import React from "react";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navBar";
import RepositoryList from "./component/repoesList";


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="flex  h-screen overflow-hidden">
        
        <Sidebar />
        <RepositoryList/>
      </div>
      </> 
  );
};

export default App;
