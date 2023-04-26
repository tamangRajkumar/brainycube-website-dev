import React from "react";
import EventCard from "@/src/components/events/EventCard";
function learnMore() {
  return (
    <div>
      <div id="team" className="mx-auto">
        <h1
          style={{ background: "#009970", color: "white" }}
          className="text-2xl font-raleway font-bold text-center p-4"
        >
          What does Brainycube do?
        </h1>
        <EventCard
          title=" The Future is in young Talents"
          description="Brainycube is a global research organization founded by young
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
          and executive bodies each country respectively."
        />
      </div>
    </div>
  );
}

export default learnMore;
