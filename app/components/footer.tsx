import React from "react";


const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className="bg-slate-600 p-5">
   

          <p className="text-xl text-center">Copyright © {year}. Websites By Pops. All rights reserved.</p>

     
    </div>
  );
};

export default Footer;
