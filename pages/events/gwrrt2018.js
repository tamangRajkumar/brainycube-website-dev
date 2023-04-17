import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { GWRRT18A, GWRRT18B, GWRRT18C } from "@/public";

function GWRRT2018() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "3rd Global Workshop on recent research techniques 2018 Details",
          }}
        />
        <EventCard
          title=" 3rd Global Workshop on recent research techniques 2018 "
          description="The event was the 3rd edition of GWRRT taking place every 2 years. The 3rd GWRRT was organized at NCIT College, Kathmandu on 22nd December 2018. The event was participated by 100 students from the university level. The students learn recent trend in different field of research. The workshop also includes research article writing and scientific presentation training skills."
        />
        <EventDetailCard year="2018" place="NCIT College, Kathmandu" date="2018-12-22" url="" />
        <EventHightlights pht1={GWRRT18A} pht2={GWRRT18B} pht3={GWRRT18C}/>
        <Footer />
      </div>
    </>
  );
}

export default GWRRT2018;
