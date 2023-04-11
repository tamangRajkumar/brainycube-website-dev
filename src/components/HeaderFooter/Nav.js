import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
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
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <div style={{background:"#ffffb3",margin:"10px"}}> */}
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
          {/* </div> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4"  >
            <Link href="/" >Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#about">About</Link>
          </li>

          <li className="p-4">
            <Link href="#services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="#events">Events</Link>
          </li>
          <li className="p-4">
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="p-4">
            <Link href="#team">Team</Link>
          </li>
          <li className="p-4">
            <Link href="#contact">Contact </Link>
          </li>
          <li className="p-1">
            <button
              style={{
                background: "#009970",
                borderRadius: "20px",
                color: "white",
              }}
              className="px-8 py-2 border"
            >
              Get Started
            </button>
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
              <Link href="/#portfolio">Portfolio</Link>
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
              className="p-1 text-1xl hover:text-gray-300"
            >
              <button
                style={{
                  background: "#009970",
                  borderRadius: "20px",
                  color: "white",
                }}
                className="px-5 py-2 border"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
