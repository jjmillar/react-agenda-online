import React from "react";
import Navbar from "../components/nav/Navbar";
import Slider from "../components/slider/Slider";
import SlideDown from "../components/slide-down/slideDown";
import Crio from "../components/treatments/crio";
import EmSculpt from "../components/treatments/emSculpt";
import Hifu7d from "../components/treatments/hifu7d";
import LaserDiodo from "../components/treatments/laserDiodo";
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
          <Hifu7d />
        </article>
        <article className="page">
          <EmSculpt />
        </article>
        <article className="page">
          <Crio />
        </article>
        <article className="page">
          <LaserDiodo />
        </article>
      </div>
    </div>
  );
};

export default Home;
