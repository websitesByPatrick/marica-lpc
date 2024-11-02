import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gray-600 flex flex-col md:flex-row">
      <div className="flex justify-center md:justify-end md:w-6/12">
        <Image
          alt="Photo of Marica Nicholas"
          src="/marica.jpg"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover m-10"
        />
      </div>
      <div className="flex flex-col items-center md:w-6/12 md:items-start justify-center">
        <h1 className="text-4xl xl:text-6xl text-center">Marica Nicholas, LPC-A</h1>
        <p className="text-xl text-center">Supervised by: Ana Valenzuela, LPC-S</p>
      </div>
    </div>
  );
};

export default Header;
