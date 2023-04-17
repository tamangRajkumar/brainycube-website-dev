import React from "react";
import Title from "@/src/components/events/Title";
import EventCard from "@/src/components/events/EventCard";
import EventDetailCard from "@/src/components/events/EventDetailCard";
import EventHightlights from "@/src/components/events/EventHighlights";
import Footer from "@/src/components/HeaderFooter/Footer";
import { APCYS17A,APCYS17B,APCYS17} from "@/public";

function NYSS2017() {
  return (
    <>
      <div>
        <Title
          style={{ marginTop: "20px  " }}
          title={{
            title: "Asia Pacific Conference for Young Scientist 2017 Details",
          }}
        />
        <EventCard
          title=" Asia Pacific Conference for Young Scientist 2017"
          description="This is an international event which is organized in different countries of the Asia-Pacific region with participants from a similar region. The APCYS was brought to Nepal by Brainycube representation after its consecutive representation in APCYS 2015 at Malaysia and APCYS 2016 at India. The event was organized at Hotel Park Village Resort, Kathmandu during 1-5 November 2017. Participants of the high school level came from different part of Asia Pacific region along with their teachers. The five-day event compromises of the poster and oral presentation along with small excursion and cultural night. Research project competition was categorized in a different field such as Physics, Computer Science, Engineering, Mathematics, Environment and Biology. The best project was awarded with Gold, Silver and Bronze medals in each category"
        />
        <EventDetailCard
          year="2017"
          place="Hotel Park Village Resort, Kathmandu"
          date="2017-11-01 "
          url=""
        />
        <EventHightlights pht1={APCYS17} pht2={APCYS17A} pht3={APCYS17B} />
        <Footer />
      </div>
    </>
  );
}

export default NYSS2017;
