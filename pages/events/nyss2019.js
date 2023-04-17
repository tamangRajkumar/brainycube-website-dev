import React from "react";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { NYSS19A, NYSS19B, NYSS19C } from "@/public";

function NYSS2017() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Nepal Youth Science Summit 2019 Details",
          }}
        />
        <EventCard
          title=" 3rd Nepal Youth Science Summit 2019"
          description="This was the 3rd edition of annual event NYSS. Brainycube Organized a two day 3rd Nepal Youth Science Summit 2019 with 50 Participants and 25 speakers from the US, Malaysia, Indian and Nepal having a different scientific and professional background. Many topics like energy, decarbonization, Industrialization and scaling, Digitalization and ICT, Medical approach, Cyberlaw were discussed as in Panel session and as keynote lectures. Participants also presented their Ideas and research through poster and oral presentation, and best of them were awarded Junior and Young scientist awards. 3rd NYSS 2019 was inaugurated by Mr Birendra Kumar Mishra, Joint Secretary: Ministry of Communication and IT. The event was also supported by Patan College of Professional Studies(HOST), Prabhu Pay and Confidence Nepal in different ways."
        />
        <EventDetailCard
          year="2019"
          place="Patan College of Professional Studies,Kathmandu"
          date="2019-06-23"
          url=""
        />
        <EventHightlights pht1={NYSS19C} pht2={NYSS19B} pht3={NYSS19A} />
        <Footer />
      </div>
    </>
  );
}

export default NYSS2017;
