import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importación router
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
