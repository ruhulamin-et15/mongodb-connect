import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";



function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<Users/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
