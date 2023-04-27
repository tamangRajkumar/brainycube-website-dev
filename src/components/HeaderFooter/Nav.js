// import Link from "next/link";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { Logo1 } from "@/public";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  const hoverColor = (e) => {
    e.target.style.cssText =
      "border-bottom: 3px solid #009970; margin-bottom: 5px; cursor: pointer; width:100%";
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1300px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
        <h2
            style={{
              color: `${textColor}`,
              background: "#ffffb3",
              padding: "10px",
              cursor: "pointer",
            }}
            className="font-bold text-4xl"
          >
            <span style={{ color: "red" }}>Brainy</span>
            <span style={{ color: "green" }}>cube</span>
          </h2>
        </Link>
        <ul
          style={{ color: `${textColor}`, fontSize: "20px" }}
          className="hidden sm:flex"
        >
          <li className="p-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              About
            </Link>
          </li>

          <li className="p-4">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Services
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Events
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="awards"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Awards
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Team
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              Contact{" "}
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="NYSS"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onMouseOver={hoverColor}
              onMouseOut={(e) => (e.target.style.borderBottom = "transparent")}
            >
              NYSS{" "}
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#about">About</Link>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#events">Events</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#awards">Awards</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#team">Team</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#contact">Contact </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-gray-300"
            >
              <Link href="/#contact">NYSS </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
