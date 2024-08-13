import React, { useEffect, useState } from "react";
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("class", "dark");
    } else {
      document.documentElement.removeAttribute("class");
    }
  }, [darkMode]);

  const handleClick = () => setClick(!click);
  const navItems = ["Home", "About", "TechStack", "Projects", "Contact"];

  const content = (
    <div
      className={`absolute top-0 left-0 w-64 h-full bg-white dark:bg-slate-900 transition-transform duration-300 ${
        click ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={handleClick}
        >
          <FaTimes />
        </button>
        <ul className="text-xl mt-16">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item}
              spy={true}
              smooth={true}
              onClick={handleClick}
            >
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded px-4">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className="sticky top-0  text-white dark:bg-slate-900 dark:text-white"
        style={{ backgroundColor: "#050816" }}
      >
        <div className="h-16 flex justify-between items-center z-50 lg:py-5 pl-20 pr-14 py-4 border-b border-slate-300">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">
              <Link to="Home" spy={true} smooth={true}>
                Sanjay Kulkarni
              </Link>
            </span>
          </div>
          <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
            <ul className="flex gap-8 text-[18px]">
              {navItems.map((item, index) => (
                <Link key={index} to={item} spy={true} smooth={true}>
                  <li className="transition cursor-pointer hover:text-blue-600 hover:border-blue-600">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <button
            className="block md:hidden transition text-2xl"
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
          {click && content} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
