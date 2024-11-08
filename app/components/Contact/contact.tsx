import React from "react";
import Image from "next/image";
import Link from "next/link"
const Contact = () => {
  return (
    <div className="section-heading">
      <div>
        <p>Contact</p>
      </div>

      <div>
        <ul>
          <li className="mb-2">
          <Image className="inline mr-2"
              alt="facebook"
              width="48"
              height="48"
              src="/email.png"
            ></Image>
            <span>
            marica@clearhopewellness.com
            </span>
            
          </li>
          <li className="mb-2">
          <Image className="inline mr-2"
              alt="facebook"
              width="48"
              height="48"
              src="/phone.png"
            ></Image>
            <span>
            281-769-2238
            </span>
            
          </li>
          <li>
            <Image className="inline mr-2"
              alt="facebook"
              width="48"
              height="48"
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
