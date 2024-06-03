import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Question from "../components/Question";
import Stockout from "../components/Stockout";
import SpreadSheet from "../components/SpreadSheet";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-custom-gradient h-screen">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Question />
      </div>
      <Stockout />
      <SpreadSheet />
      <Footer />
    </div>
  );
};

export default Home;
