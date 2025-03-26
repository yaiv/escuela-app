import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  {/* Aquí es donde debe estar PokémonCard */}
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
