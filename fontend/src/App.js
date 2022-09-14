import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./pages/CartScreen";

const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path="/cart/" element={<CartScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
