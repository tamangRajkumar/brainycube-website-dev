import React from "react";
import Image from "next/image";
import { Logo1 } from "@/public";

const About = () => {
  return (
    <div id="about" className=" max-w-[1240px] mx-auto">
      <h1
        style={{ borderBottom: "2px solid green" }}
        className="text-2xl font-raleway font-bold text-center p-4"
      >
        About Us
      </h1>
      <div class="flex flex-wrap items-center justify-center md:justify-start md:items-start md:mt-4 lg:mt-8">
        <div class="w-full md:w-1/5 px-4 md:px-0">
          <Image
            class="max-w-full h-auto object-contain"
            src={Logo1}
            alt="Logo"
          />
        </div>
        <div class="w-full md:w-4/5 px-4 md:px-8 lg:px-12 mt-4 md:mt-0">
          <p
            class="text-lg md:text-xl lg:text-1xl leading-8 md:leading-9 lg:leading-10 text-gray-800"
            style={{ textAlign: "justify" }}
          >
            Brainycube is a global research organization founded by young,
            energetic scientists during their Bachelor's studies. Our mission is
            to promote research among talented young minds by offering completed
            services in Data Science, IoT, AI, ML, and Health Analytics, along
            with consulting. We organize events and have received recognition
            for our efforts. Our goal is to become the largest research and
            technical solutions provider with a tremendous scientific and
            technical workforce in our team and executive bodies. Join us at
            Brainycube to break new ground in research and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
