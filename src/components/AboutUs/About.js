import React from "react";
import Image from "next/image";
import { Logo } from "@/public";

const About = () => {
  return (
    <div id="about" className=" max-w-[1240px] mx-auto">
      <h1
        style={{ borderBottom: "2px solid green" }}
        className="text-2xl font-raleway font-bold text-center p-4"
      >
        About Us
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div class=" p-4 sm:col-span-1">
          <Image
            style={{ borderRadius: "10px", marginTop: "10px" }}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={Logo}
            width={550}
            height={680}
          />
        </div>
        <div class="p-4 sm:col-span-4">
          <p
            className="pb-4"
            style={{
              fontSize: "20px",
              textAlign: "justify",
              marginTop: "10px",
            }}
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
