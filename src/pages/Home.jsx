import React from "react";
import Navbar from "../components/nav/navbar.jsx";
import Slider from "../components/slider/Slider";
import SlideDown from "../components/slide-down/slideDown";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <SlideDown/>
    </div>
  )
};

export default Home;