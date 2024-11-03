import React from "react";
import Header from "./components/header/header";
import Specialities from "./components/specialities/specialities";
import Certifications from "./components/certifications/certifications";
import Biography from "./components/biography/biography";
import Insurance from "./components/Insurance/insurance";
import Contact from "./components/Contact/contact";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex m-2">

        <div className="w-6/12">
        <div>
          <Specialities />
        </div>
        <div>
        <Certifications />
      </div>
      <div>
        <Insurance />
      </div>
      <div>
        <Contact />
      </div>
        </div>



        <div className="w-6/12 m-2">
          <Biography />
        </div>
      </div>


    </div>
  );
};

export default Home;
