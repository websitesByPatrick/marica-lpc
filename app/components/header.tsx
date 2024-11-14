import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row content-center">
        <Image
          alt="Photo of Marica Nicholas"
          src="/marica.jpg"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover my-2"
        />
      </div>

      <div className="flex flex-col content-center">
        <div>
          <h2 className="text-2xl p-1 text-center">Counseling Services</h2>
          <h1 className="text-2xl p-1 text-center">Marica Nicholas, LPC-Associate</h1>
          <p className="text-xl p-1 mt-4 text-center">
            Supervised by: 
          </p>
          <p className="text-xl p-1 text-center">
            Ana Valenzuela, LPC-Supervisor
          </p>
          <p className="text-xl p-1 mt-4 text-center">Located in Tomball, Texas</p>
        </div>
      </div>

      <div className="flex my-4">
        <Image src="/header.jpg" width="300" height="300" alt="Mental Health" />
      </div>
    </div>
  );
};

export default Header;
