import React from "react";
import "./App.css";
import MyForm from "./components/Form/MyForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
