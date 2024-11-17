import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="section">
      <section className="text-xl text-center">
        Copyright © {year}. Websites By Pops. All rights reserved.
      </section>
    </div>
  );
};

export default Footer;
