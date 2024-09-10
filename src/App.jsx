import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Room from "./components/Room";
import Products from "./components/Products";
import Share from "./components/Share";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Room />
      <Products />
      <Share />
      <Footer />
    </div>
  );
};

export default App;
