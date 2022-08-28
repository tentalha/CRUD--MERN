import React from "react";
import FormPage from "./Pages/FormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./Pages/EditPage";

function Appp() {
  return (
    <div className="bg-[#242B2E] flex flex-col h-full items-center gap-4">
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Appp;
