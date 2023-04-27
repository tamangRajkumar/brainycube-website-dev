import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-350">
        <div class="mx-auto w-full container p-4 sm:p-6">
          <div class="md:flex md:justify-between">
            <div class="mb-1 md:mb-0">
              <a href="/" class="flex items-center">
                <h2
                  style={{
                    background: "#ffffb3",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  class="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                >
                  <span style={{ color: "red" }}>Brainy</span>
                  <span style={{ color: "green" }}>cube</span>
                </h2>
              </a>
              <div>
                <ul class="text-gray-800 dark:text-gray-800">
                 
                  <li class="mb-4">
                    <div class="flex items-center mt-8 text-white-600 ">
                      <GoLocation size="20px" style={{ color: "#009970" }} />
                      <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        Kathmandu, Nepal,
                      </div>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex items-center mt-8 text-white-600 ">
                      <HiOutlineMail size="20px" style={{ color: "#009970" }} />
                      <div class="ml-4 text-md tracking-wide font-semibold w-40">
                      info@brainycube.org.np
                      </div>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex items-center mt-8 text-white-600 ">
                      <IoCall size="20px" style={{ color: "#009970" }} />
                      <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        01-4423736/441725
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* second part */}
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Useful Links
                </h2>
                <ul class="text-gray-600 dark:text-gray-800">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Research Projects
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Training and Workshops
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Makers Space
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Scientific Event Management
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Website Design $ development
                    </a>
                  </li>
                </ul>
              </div>
              {/* //third part */}
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Quick Links
                </h2>
                <ul class="text-gray-600 dark:text-gray-800">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/#about" class="hover:underline">
                      About us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/#services" class="hover:underline">
                      Services
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Term of services
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-800">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Brainycube
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
