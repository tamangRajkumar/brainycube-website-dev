import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { NYSS18A, NYSS18B, NYSS18C } from "@/public";

function NYSS2017() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Nepal Youth Science Summit 2018 Details",
          }}
        />
        <EventCard
          title=" Nepal Youth Science Summit 2018"
          description="NYSS 2018 was 2nd edition of Nepal youth science summit which was organized by us at Sunway college, Kathmandu on 23-24 June 2018. The event was participated by more than 60 students from different high schools and university. The model of event was similar to 1st NYSS but students were also allowed to give the oral presentation of their research work. Scientist, industrialist and expert from a different field belonging from different nation also give lectures during the event and involved in panel discussion. Best projects by the student were also awarded young scientist and junior scientist award in different categories. Also, 10 students were selected to represent Nepal at the International competition in China, Taiwan and Turkey.."
        />
        <EventDetailCard
          year="2018"
          place="Sunway college, Kathmandu"
          date="2018-06-23          "
          url=""
        />
        <EventHightlights pht1={NYSS18C} pht2={NYSS18B} pht3={NYSS18A} />
        <Footer />
      </div>
    </>
  );
}

export default NYSS2017;
