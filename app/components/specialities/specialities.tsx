import React from "react";

const Specialities = () => {
  return (
    <div className="bg-gray-300 text-gray-800 flex items-center">
      <p className="text-3xl p-3">Specialities</p>
      <div className="flex justify-center">
        <ul className="list-disc ml-10 text-lg">
          <li>Anxiety</li>
          <li>Christian</li>
          <li>Anger</li>
          <li>Play Therapy</li>
          <li>Trauma</li>
        </ul>
        <ul className="list-disc ml-10 text-lg">
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
