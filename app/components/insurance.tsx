import React from "react";

const Insurance = () => {
  return (
    <div className="text-gray-800 bg-gray-200 flex flex-col items-center p-3 m-3">
      <div className="flex self-start mb-4">
      <h2 className="text-3xl">Insurance</h2>
      </div>

      <div>
        <ul className="list-disc text-xl">
          <li>Aetna</li>
          <li>Cigna</li>
          <li>Sliding Scale</li>
        </ul>
      </div>
    </div>
  );
};

export default Insurance;
