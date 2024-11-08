import React from "react";
import Header from "./components/header/header";
import Specialities from "./components/specialities/specialities";
import Certifications from "./components/certifications/certifications";
import Biography from "./components/biography/biography";
import Insurance from "./components/Insurance/insurance";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer"

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex m-2">
        <div className="flex flex-col w-6/12">

          <div className="h-1/4 bg-gray-100 m-2">
            <Specialities />
          </div>

          <div className="h-1/4 bg-gray-100 m-2">
            <Certifications />
          </div>

          <div className="h-1/4 bg-gray-100 m-2">
            <Insurance />
          </div>

          <div className="h-1/4 bg-gray-100 m-2">
            <Contact />
          </div>

        </div>

        <div className="flex flex-col w-6/12 bg-gray-100 m-2">
          <div>
            <Biography />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
