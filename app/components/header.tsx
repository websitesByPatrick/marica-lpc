import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">


      <div className="flex flex-row content-center lg:w-4/12 lg:justify-end ">
        <Image
          alt="Photo of Marica Nicholas"
          src="/marica.jpg"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover my-2"
        />
      </div>

      <div className="flex flex-col content-center lg:w-4/12 m-4">
        <div>
          <h2 className="text-2xl p-1 text-center">Nicholas Counseling</h2>
          <h1 className="text-2xl p- text-center">Marica Nicholas, LPC-Associate</h1>
          <p className="text-xl p-1 mt-4 text-center">
            Supervised by: 
          </p>
          <p className="text-xl p-1 text-center">
            Ana Valenzuela, LPC-Supervisor
          </p>
          <p className="text-xl p-1 mt-4 text-center">Located in Tomball, Texas</p>
        </div>
      </div>

      <div className="flex my-4 mx-3 w-6/6 lg:w-4/12 lg:justify-start">
        <Image src="/mental health.jpg" width="300" height="300" alt="Mental Health" />
      </div>

     
    </div>
  );
};

export default Header;
