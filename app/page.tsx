import React from "react";
import Header from "./components/header";
import Specialities from "./components/specialities";
import Certifications from "./components/certifications";
import Biography from "./components/biography";
import Insurance from "./components/insurance";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Bio2 from "./components/bio-2";
import Bio3 from "./components/bio-3";
import Bio4 from "./components/bio-4";

const Home = () => {
  return (
    <div className="flex flex-col m-6">
      <div className="m-4">
        <Header />
      </div>

      <div className="flex lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-1/4">

          <div className="section lg:flex-row">
            <Specialities />
          </div>

          <div className="section">
            <Certifications />
          </div>

          <div>
            <Insurance />
          </div>

          <div>
            <Contact />
          </div>
        </div>

        <div className="flex flex-col lg:w-2/4">
          <div className="section">
            <Biography />
          </div>

          <div className="section">
            <Bio2/>
          </div>
          <div>
            <Bio3 />
          </div>
          <div>
            <Bio4 />
          </div>
        </div>
      </div>

      <div className="flex lg-w-12/12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
