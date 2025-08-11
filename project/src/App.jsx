import React from "react";
import { Routes, Route } from "react-router-dom";
import Problem1 from "./Problems/Problem1";
import Problem2 from "./Problems/Problem2";
import Problem3 from "./Problems/Problem3";
import Problem4 from "./Problems/Problem4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Problem1 />} />
        <Route path="/integer" element={<Problem2 />} />
        <Route path="/double" element={<Problem3 />} />
        <Route path="/count" element={<Problem4 />} />
      </Routes>
    </>
  );
}

export default App;
