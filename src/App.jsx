import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./component/dashboard/Dashboard";
import LoginPage from "./component/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
