import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Room from "./components/Room";
import Products from "./components/Products";
import Share from "./components/Share";
import Footer from "./components/Footer";
import InspirationRooms from "./components/InspirationRooms";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Room />
      <Products />
      <InspirationRooms />
      <Share />
      <Footer />
    </div>
  );
};

export default App;
