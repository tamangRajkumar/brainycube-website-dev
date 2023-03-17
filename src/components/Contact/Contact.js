import React from "react";
import Image from "next/image";
import { Logo } from "@/public";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const serviceCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };
  const cardBody = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    background: "#e3e1e1",
  };
  return (
    <div id="contact" className="  mx-auto">
      <h1
        style={{ borderBottom: "2px solid green" }}
        className="text-3xl font-raleway font-bold text-center p-4"
      >
        Contact us
      </h1>
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div
            style={cardBody}
            class="bg-white shadow-md rounded-md overflow-hidden"
          >
            <div style={serviceCard} class="p-4">
              <HiOutlineMail size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Send Email
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                brainycube.org@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div
            style={cardBody}
            class="bg-white shadow-md rounded-md overflow-hidden"
          >
            <div style={serviceCard} class="p-4">
              <IoCall size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Phone Number
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                01-4423736/441725
              </p>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div style={{}} class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div
            style={cardBody}
            class="bg-white shadow-md rounded-md overflow-hidden"
          >
            <div style={serviceCard} class="p-4">
              <GoLocation size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Location
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Maitidevi,Kathmandu, Nepal,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
