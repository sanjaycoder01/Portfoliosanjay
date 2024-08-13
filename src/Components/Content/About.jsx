import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/Profile1.jpg";
import Resume from "../../assets/Resume.pdf";

function About() {
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

  return (
    <div
      id="About"
      style={{ backgroundColor: "#050816" }}
      className=" text-white dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        alt=""
        className="rounded border-2 p-1 border-blue-600 img_glow"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
        <h1
          data-aos="fade-right"
          style={{ fontFamily: "Monument" }}
          className="text-[52px] font-semibold mb-8 leading-normal text-blue-600 uppercase"
        >
          About Me
        </h1>
        <p className="text-xl text-white">
          Hello, I'm Sanjay Kulkarni, a passionate frontend developer and
          website builder from Bangalore, India. With a solid grounding in Java
          Spring Boot basics and a deep understanding of AWS services, I'm
          continuously honing my web development skills. I bring a diverse and
          innovative approach to every project I undertake.
          <br />
          I have hands-on experience with HTML, CSS, JavaScript, React,
          Redux-Toolkit,Java, SQL, and Tailwind CSS , and I'm always eager to
          learn more. I'm passionate about staying current with industry trends
          and continuously enhancing my abilities. I’m excited to apply my
          diverse skill set to cutting-edge projects in the ever-evolving world
          of web development, and I am committed to contributing innovative
          solutions and driving success in every project I undertake.
          <br />
        </p>
        <div className="flex mt-8 gap-2 space-x-2 items-center justify-center">
          <a href={Resume} target="_blank">
            <div className="nano-button shadow-xl hover:shadow-blue-800/50 border-2 hover:text-blue-600 hover:border-blue-600 rounded-lg py-4 px-8 uppercase overflow-hidden">
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
