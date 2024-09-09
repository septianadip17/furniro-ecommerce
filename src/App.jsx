import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Room from "./components/Room";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="container mx-auto border-4 border-black">
      <Navbar />
      <Header />
      <Room />
      <Products />
    </div>
  );
};

export default App;
