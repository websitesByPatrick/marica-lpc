import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="section flex flex-col items-center p-3 m-3">
      <div className="flex self-start mb-4">
      <h2 className="text-3xl">Contacts</h2>
      </div>

      <div>
        <ul className="text-xl">
          <li className="mb-2">
          <Image className="inline mr-2"
              alt="facebook"
              width="20"
              height="20"
              src="/email.png"
            ></Image>
            <span>
            marica@clearhopewellness.com
            </span>
            
          </li>
          <li className="mb-2">
          <Image className="inline mr-2"
              alt="facebook"
              width="20"
              height="20"
              src="/phone.png"
            ></Image>
            <span>
            281-769-2238 Ext. 640
            </span>
            
          </li>
          <li>
            <Image className="inline mr-2"
              alt="facebook"
              width="20"
              height="20"
              src="/facebook.png"
            ></Image>
            <span><a href="https://www.facebook.com/profile.php?id=61566270420816" target="_blank">Follow on Facebook</a></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
