import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { GWRRT14A, GWRRT14B, GWRRT14C } from "@/public";

function GWRRT2014() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Global Workshop on recent research techniques 2014-Details",
          }}
        />
        <EventCard
          title=" Global Workshop on recent research techniques 2014"
          description="IT was the first event organized under the banner of Brainycube.This event was organized at Mahendra Morang College of Biratnagar,Nepal on 24-25 December 2014 where around 400 high schools and a university student have participated and get motivated and learn about recent research trends from 20 scientists from Nepal andIndia. We decide to keep this event as a biennial event of  Brainycube."
        />
        <EventDetailCard year="2014" place="Mahendra Morang College of Biratnagar" date="2014-12-25" url="" />
        <EventHightlights pht1={GWRRT14A} pht2={GWRRT14B} pht3={GWRRT14C}/>
        <Footer />
      </div>
    </>
  );
}

export default GWRRT2014;
