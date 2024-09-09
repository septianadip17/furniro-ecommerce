import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Room from "./components/Room";

const App = () => {
  return (
    <div className="container mx-auto border-4 border-black">
      <Navbar />
      <Header/>
      <Room/>
    </div>
  );
};

export default App;
