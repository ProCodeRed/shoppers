import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
