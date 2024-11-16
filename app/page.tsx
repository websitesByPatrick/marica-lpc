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

      <Specialities />

      <Certifications />

      <Insurance />

      <Contact />

      <Biography />

      <Footer />
    </div>
  );
};

export default Home;
