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
            Brainycube is a global research organization founded by young
            energetic scientists from different countries during their Bachelor
            with a moto “Let’s Continue Breaking the Impossible” study in
            university. Brainycube established with an aim to provide
            opportunities to the young talented brain. Brainycube’s vision and
            mission are to supply all possible sources needed for different
            research purposes. Brainycube has been organized numbers of local,
            national and international events such as research technique
            workshop, conference, summit and competition. Brainycube also
            received national and international awards for its works promoting
            research for the young scientist. It’s goals also to be the largest
            research hub by having country representatives in different
            countries with well flowered by the tremendous scientific committee
            and executive bodies each country respectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
