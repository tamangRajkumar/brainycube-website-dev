import React from "react";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";


function GWRRT2014() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "2nd Global Workshop on recent research techniques 2016 Details",
          }}
        />
        <EventCard
          title=" 2nd Global Workshop on recent research techniques 2016
          "
          description="2nd GWRRT was organized on 3rd December 2016 as a an regular biennial event at Hotel Sangam, Biratnagar, Nepal. More than 80 student and faculties participated in this event where scientist and experts from Nepal, India and Indonesia gave lectures and workshops. A live competition was also organized at the event where the winner got awarded an opportunity to present her research at the Young scientist event."
        />
        <EventDetailCard year="2016" place="Hotel Pacific, Kathmandu ,Nepal" date="2016-06-04" url="" />
        <EventHightlights pht1={""} pht2={""} pht3={""}/>
        <Footer />
      </div>
    </>
  );
}

export default GWRRT2014;
