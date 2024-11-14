import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-slate-600 flex p-5 m-4">
      <div className="flex flex-col w-3/12 items-center content-center">
        <Image
          alt="Photo of Marica Nicholas"
          src="/marica.jpg"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover my-2"
        />
      </div>

      <div className="flex flex-col w-6/12 justify-center">
        <div>
          <h2 className="text-3xl p-1">Counseling Services</h2>
          <h1 className="text-4xl p-1">Marica Nicholas, LPC-Associate</h1>
          <p className="text-2xl p-1">
            Supervised by: Ana Valenzuela, LPC-Supervisor
          </p>
          <p className="text-xl p-1">
            Located in Tomball, Texas
          </p>
        </div>
      </div>

      <div className="w-3/12">
        <Image src="/header.jpg" width="300" height="300" alt="Mental Health"/>
      </div>
    </div>
  );
};

export default Header;
