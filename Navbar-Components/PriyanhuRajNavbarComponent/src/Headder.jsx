import React, { useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Work", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Contact", link: "#" },
];

export const Header = () => {
  const [activeLink, setActiveLink] = useState(NavbarMenu[0]?.id);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="flex py-2 scroll-smooth bg-transparent backdrop-blur-sm sticky top-0 z-10 sm:px-5 px-2 justify-evenly items-center h-16">
      {/* Logo */}
      <Link to="#">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="logo flex gap-3 items-center"
        >
          <div className="img">
            <img
              src="./logo.png"
              className="p-[2px] h-14 w-14 hover:rotate-[280deg] duration-1000 border-[3px] border-blue-600 rounded-full"
              alt="Logo"
            />
          </div>
          <div className="dets">
            <h1 className="leading-none font-semibold text-2xl uppercase font-['Space_Grotesk']">
              Priyanshu Raj
            </h1>
            <h1 className="font-extralight font-['Varela_Round'] tracking-tight text-sm">
              Fullstack Web Developer
            </h1>
          </div>
        </motion.div>
      </Link>

      {/* Mobile menu button */}
      <button
        className="block lg:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full left-0 w-full bg-gray-800  rounded-lg p-4 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-4 font-semibold">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="font-[Schibsted_Grotesk]">
                  <Link
                    // to={item.link}
                    className={`block text-sm py-2 ${
                      activeLink === item.id ? "bg-black/40" : "bg-transparent"
                    } rounded-full px-4 uppercase duration-1000`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links below menu */}
            <div className="mt-4 flex justify-center gap-6">
              <Link
                to="http://www.linkedin.com/in/priyanshu-raj-096566206"
                className="hover:bg-blue-500 p-2 rounded-full duration-300"
              >
                <GrLinkedinOption size={25} />
              </Link>
              <Link
                to="https://www.instagram.com/black.eye.__/"
                className="hover:bg-purple-900 p-2 rounded-full duration-300"
              >
                <BiLogoInstagramAlt size={25} />
              </Link>
              <Link
                to="https://github.com/blackeye75/"
                className="hover:bg-black p-2 rounded-full duration-300"
              >
                <TbBrandGithubFilled size={25} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:flex    gap-4 items-center "
      >
        <ul className="flex items-center gap-4 bg-zinc-800 rounded-full px-1 py-1">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="font-[Schibsted_Grotesk]">
              <Link
                to={item.link}
                className={`inline-block text-sm py-2 ${
                  activeLink === item.id ? "bg-black/40" : "bg-transparent"
                } rounded-full px-4 uppercase duration-1000`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links in Desktop View */}
        <div className="flex gap-4 items-center ml-6">
          <Link
            to="http://www.linkedin.com/in/priyanshu-raj-096566206"
            className="hover:bg-blue-500 p-2 rounded-full duration-300"
          >
            <GrLinkedinOption size={25} />
          </Link>
          <Link
            to="https://www.instagram.com/black.eye.__/"
            className="hover:bg-purple-900 p-2 rounded-full duration-300"
          >
            <BiLogoInstagramAlt size={25} />
          </Link>
          <Link
            to="https://github.com/blackeye75/"
            className="hover:bg-black p-2 rounded-full duration-300"
          >
            <TbBrandGithubFilled size={25} />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
