import React from "react";

const Specialities = () => {
  return (
    <div className="section">
      <div className="section-title">
        <section>Specialities</section>
      </div>

      <div className="lg:flex justify-around section-body">
        <ul className="list-disc text-xl">
          <li>Anxiety</li>
          <li>Christian</li>
          <li>Anger</li>
          <li>Play Therapy</li>
          <li>Trauma</li>
        </ul>
        <ul className="list-disc text-xl">
          <li>Autism</li>
          <li>Children</li>
          <li>Depression</li>
          <li>Geriatric</li>
          <li>Domestic Violence</li>
        </ul>
      </div>
    </div>
  );
};

export default Specialities;
