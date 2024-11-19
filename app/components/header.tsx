import React from "react";
import Header1 from "./header1";
import Header2 from "./header2";
import Header3 from "./header3";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <Header1 />
      <Header2 />
      <Header3 />


    </div>
  );
};

export default Header;
