import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Home";
import Vacancies from "./components/Vacancies";
import Portal from "./components/Portal";
import FeaturedJob from "./components/FeaturedJob";
import Testimonial from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <div className="header-wrapp">
        <Header />
      </div>
      <Hero />
      <Vacancies />
      <Portal />
      <FeaturedJob />
      <Testimonial />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
