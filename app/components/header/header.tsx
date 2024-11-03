import React from "react";
import Image from "next/image";

const Header = () => {
  const h1Style =
    "md:text-2xl xl:text-4xl ml-2 bg-gray-200 text-gray-900 p-2 rounded";
  const h2Style =
    "md:text-2xl xl:text-4xl mr-2 bg-gray-200 text-gray-900 p-2 rounded";

  return (
    <div className="bg-gray-600 flex flex-col md:flex-row">
      <div className="flex flex-col items-center md:w-5/12 md:justify-center md:items-end">
        <h2 className={h2Style}>Counceling Services</h2>
      </div>

      <div className="flex justify-center md:justify-center md:w-2/12">
        <Image
          alt="Photo of Marica Nicholas"
          src="/marica.jpg"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover my-2"
        />
      </div>

      <div className="flex flex-col items-center md:w-5/12 md:justify-center md:items-start">
        <div>
          <h1 className={h1Style}>Marica Nicholas, LPC-A</h1>
          <p className="text-xxl text-center">
            Supervised by: Ana Valenzuela, LPC-S
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
