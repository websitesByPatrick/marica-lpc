import React from "react";
import Header from "./components/header";
import Specialities from "./components/specialities";
import Certifications from "./components/certifications";
import Biography from "./components/biography";
import Insurance from "./components/insurance";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="lg:flex">
        <div className="lg:w-6/12 m-3">
          <div className="lg:h-1/4">
            <Specialities />
          </div>
          <div className="lg:h-1/4 m-3">
            <Certifications />
          </div>
          <div className="lg:h-1/4 m-3">
            <Insurance />
          </div>
          <div className="lg:h-1/4 m-3">
            <Contact />
          </div>
        </div>
        <div className="lg:w-6/12 m-3">
          <Biography />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
