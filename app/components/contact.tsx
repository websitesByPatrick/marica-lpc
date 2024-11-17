import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="section">
      <div className="section-title">
        <section>Contacts</section>
      </div>

      <div className="section-single-list section-list-none">
        <ul>
          <li className="mb-2">
            <Image
              alt="facebook"
              width="40"
              height="40"
              src="/email.png"
            ></Image>
          </li>
          <li className="mb-8">marica@clearhopewellness.com</li>

          <li className="mb-2">
            <Image
              className="inline mr-2"
              alt="facebook"
              width="40"
              height="40"
              src="/phone.png"
            ></Image>
          </li>
          <li className="mb-8">281-769-2238 Ext. 640</li>
          <li>
            <Image
              className="inline mr-2"
              alt="facebook"
              width="40"
              height="40"
              src="/facebook.png"
            ></Image>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61566270420816"
              target="_blank"
            >
              Follow on Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
