import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { NYSS17A, NYSS17B, NYSS17C } from "@/public";

function NYSS2017() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Nepal Youth Science Summit 2017 Details",
          }}
        />
        <EventCard
          title=" Nepal Youth Science Summit 2017"
          description="Nepal Youth was organized on 29 - 30 July 2017 at Hotel Manag, Kathmandu. This was a young scientist event which was completely involving and promoting young scientist of the nation. The event was participated by more than 60 student and researcher from different universities and high schools. They have also presented their research project through a poster presentation. Best poster was also awarded the young scientist award and Junior scientist award in different categories. A on-spot research competition was also organized during the event where students presented their ideas. The event was carried out with numerous lectures from scientists, entrepreneurs, industrialist and medical professionals from Nepal, India and Indonesia along with panel discussion among them in recent burning topics in a particular domain of research. The event was decided to organize annually."
        />
        <EventDetailCard
          year="2017"
          place="Hotel Manag, Kathmandu"
          date="2017-07-29"
          url=""
        />
        <EventHightlights pht1={NYSS17C} pht2={NYSS17B} pht3={NYSS17A} />
        <Footer />
      </div>
    </>
  );
}

export default NYSS2017;
