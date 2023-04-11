import React from "react";

function EventCard({title,description}) {
  return (
    <>
    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 lg:w-2/3 p-4">
        <div
          style={{ background: "#e3e1e1" }}
          class="bg-grey shadow-md rounded-md overflow-hidden"
        >
          <div class="p-4">
            <h1 class="text-lg font-semibold mb-2 font-raleway">
              {" "}
             {title}
            </h1>
            <p style={{ textAlign: "justify" }} class=" mb-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
     {/* detail card */}
    </>
  );
}

export default EventCard;
