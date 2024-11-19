import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <section className="text-xl text-center pt-4">
        Copyright © {year}. Websites By Pops. All rights reserved.
      </section>
    </div>
  );
};

export default Footer;
