import React from "react";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { YSS16A, YSS16B, YSS16C } from "@/public";

function YSS2016() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Portfolio Details",
          }}
        />
        <EventCard
          title=" Young Scientist Summit 2016"
          description="This was organized in collaboration with other organizations. This event was designed and brought by Brainycube member Akash Deo, and with the support of team member, it was successfully organized at Hotel Pacific, Kathmandu on 4-5 June 2016. Around 50 young scientists participated in the event from a different stream of science and level of studies. The participant also presented their research and projects and the best were awarded Young scientist award and Junior scientist award. The event also compromise lectures and panel discussion by different scientists, entrepreneurs and experts from Nepal, India, Germany, Malaysia, Poland and Indonesia"
        />
        <EventDetailCard year="2016" place="Hotel Sangam, Biratnagar,Nepal" date="01 March, 2020" url="" />
        <EventHightlights pht1={YSS16C} pht2={YSS16B} pht3={YSS16A}/>
        <Footer />
      </div>
    </>
  );
}

export default YSS2016;
