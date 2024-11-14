import React from "react";

const Specialities = () => {
  return (
    <div className="text-gray-800 flex flex-col items-center p-3 m-5">
      <div className="flex self-start mb-4">
        <h2 className="text-3xl">Specialities</h2>
      </div>

      <div className="">
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
