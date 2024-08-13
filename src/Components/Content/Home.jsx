import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import img from "../../assets/Profile1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

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
    <div
      id="Home"
      style={{ backgroundColor: "#050816" }}
      className="text-white dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      {/* Content here */}

      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center ">
        <h1
          data-aos="fade-right"
          className="text-[44px] font-semibold mb-8 leading-normal uppercase"
          style={{ fontFamily: "Monument" }}
        >
          Glad to Have You Here{" "}
          <span className="text-blue-600 hover:border-blue-600">
            Explore My Work!
          </span>
        </h1>
        <p data-aos="fade-left" className="text-xl">
          Hi, I'm Sanjay Kulkarni, a passionate frontend developer and website
          builder from Bangalore, India. With a solid grounding in ReactJs, Java
          Spring Boot basics and a good understanding in Problem Solving skills,
          I'm continuously honing my web development skills. I bring a diverse
          and innovative approach to every project I undertake.
        </p>
        <div data-aos="fade-up" className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              {social.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.link}
                  className="hover:text-blue-600 hover:border-blue-600 rounded-full glow p-2"
                >
                  <div className="text-[28px]">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        alt=""
        className="rounded-full border-2 p-1 border-blue-600 img_glow"
      />
    </div>
  );
}

export default Home;
