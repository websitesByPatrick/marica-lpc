import React from "react";
import Header from "./components/header";
import Biography from "./components/qualifications";
import Footer from "./components/footer";
import Bio2 from "./components/bio-2";
import Bio3 from "./components/bio-3";
import Bio4 from "./components/bio-4";

const Home = () => {
  return (
    <div className="flex flex-col m-6 w-12/12 items-center">
      <div>
        <Header />
      </div>

      <div className="flex">

        <div className="">
          <div>
            <Biography />
          </div>
          <div>
            <Bio2 />
          </div>
        </div>

        <div className="">
          <div>
            <Bio3 />
          </div>

          <div>
            <Bio4 />
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
