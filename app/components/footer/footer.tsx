import React from "react";


const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className="bg-slate-600 flex p-5 m-4">
      <div className="flex flex-col w-10/12">
        <div>
          <p className="text-2xl text-center">Copyright © {year}. Websites By Pops. All rights reserved.</p>
          <p className="text-2xl text-center"></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
