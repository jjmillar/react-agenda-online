import Navbar from "../components/nav/Navbar"
import Slider from "../components/slider/Slider"
import SlideDown from "../components/slide-down/slideDown"
import Treatments from "../components/treatments/treatments"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="articles">
        <article>
          <Slider />
          <SlideDown />
        </article>
        <Treatments />
      </section>
    </div>
  );
};

export default Home;
