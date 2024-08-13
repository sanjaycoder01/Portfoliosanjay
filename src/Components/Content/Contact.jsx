import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  // For animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="Contact"
      style={{ backgroundColor: "#050816" }}
      className=" text-white dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        style={{ fontFamily: "Monument" }}
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-600"
      >
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/xqazbply"
        method="POST"
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className=" dark:text-slate-500 lg:flex gap-6">
          <input
            type="hidden"
            name="_subject"
            value="New submission from your website"
          />
          <input
            type="text"
            name="name"
            className="w-full my-3 rounded-lg text-black p-4 border-2 border-blue-600  text-xl bg-white dark:bg-slate-800"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="_replyto"
            className="w-full my-3 rounded-lg text-black p-4 border-2 border-blue-600  text-xl bg-white dark:bg-slate-800"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full my-3 rounded-lg text-black bg-white dark:bg-slate-800 p-4 border-2 border-blue-600  text-xl"
          placeholder="Enter Your Message..."
          cols="20"
          rows="10"
          required
        ></textarea>
        <button
          className="nano-button my-3 shadow-xl hover:shadow-blue-800/50 text-white dark:text-white border-2 hover:bg-blue-600 border-blue-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
