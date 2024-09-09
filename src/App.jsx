import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container mx-auto border-4 border-black">
      <Navbar />
      <Header/>
    </div>
  );
};

export default App;
