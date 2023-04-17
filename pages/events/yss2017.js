import React from "react";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { YSS17A, YSS17B, YSS17C } from "@/public";

function YSS2016() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Young Scientist Summit 2017 Details",
          }}
        />
        <EventCard
          title=" Young Scientist Summit 2017"
          description="The event was organized at the Department of Physics, Tribhuvan University on 28-29 Jan 2017 on collaboration with different organizations. The event witnessed around hundred of research projects and presentation through poster from high school and university students. The best project was also awarded young scientist award and junior scientist award. And Junior Scientist awardee also got the opportunity to represent Nepal at Asia Pacific conference for Young Scientist 2017. The event also includes different lecture series and panel discussion from scientist and expert coming from a different field."
        />
        <EventDetailCard
          year="2017"
          place="Tribhuvan University Kathmandu"
          date="2017-06-28"
          url=""
        />
        <EventHightlights pht1={YSS17C} pht2={YSS17B} pht3={YSS17A} />
        <Footer />
      </div>
    </>
  );
}

export default YSS2016;
