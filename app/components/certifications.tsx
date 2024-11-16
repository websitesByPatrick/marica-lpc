import React from "react";

const Certifications = () => {
  return (
    <div className="text-gray-800 bg-gray-200 flex flex-col items-center p-3 m-3">
      <div className="flex self-start mb-4">
        <h2 className="text-3xl">Certifications</h2>
      </div>

      <div>
        <ul className="list-disc text-xl">
          <li>Licenced Professional</li>
          <li className="ml-2 mb-2 list-none">Counselor - Associate</li>
          <li>Texas License</li>
          <li className="ml-2 list-none">Number: 95215</li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
