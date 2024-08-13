import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  const social = [
    {
      link: "https://www.linkedin.com/in/sanjay-kulkarni-276712212/",
      icon: <FaLinkedinIn />,
    },
    {
      link: "https://github.com/sanjaycoder01",
      icon: <AiFillGithub />,
    },
    {
      link: "https://x.com/SanjayK95287873",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <footer
      className="md:flex md:px-10 lg:flex bg-slate-600 dark:bg-slate-800 text-white dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800"
      style={{ backgroundColor: "#050816" }}
    >
      <div>
        <h2 className="text-[22px] font-semibold text-blue-600 py-2">
          Copyright © 2024. All rights are reserved
        </h2>
      </div>
      <div className="md:flex lg:flex gap-10 ">
        <div>
          <h2 className="text-[22px] font-semibold text-blue-600 py-2  uppercase">
            Contact
          </h2>
          <a
            href="mailto:chiragjain.jain7@gmail.com"
            className="text-[16px]  hover:text-blue-600 transition-all duration-150 ease-in-out cursor-pointer"
          >
            Email: sjkulkarni31@gmail.com
          </a>
          <p className="text-[16px] pb-5 hover:text-blue-600 transition-all duration-150 ease-in-out">
            Phone: +91-9019366720
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-blue-600 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            {social.map((social, index) => (
              <a
                key={index}
                target="_blank"
                href={social.link}
                className=" hover:text-blue-600 transition-all duration-150 ease-in-out"
              >
                <div className="text-[28px]">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
