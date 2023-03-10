import React from "react";
import Navbar from "../components/nav/Navbar";
import Slider from "../components/slider/Slider";
import SlideDown from "../components/slide-down/slideDown";
import TreatmentCard from "../components/treatment/treatment";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="articles">
        <article className="page">
          <Slider />
          <SlideDown />
        </article>
        <article className="page">
          <TreatmentCard />
        </article>
      </div>
    </div>
  );
};

export default Home;
