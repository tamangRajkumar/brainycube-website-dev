import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GWRRT14,
  GWRRT16,
  GWRRT18,
  NYSS17,
  NYSS18,
  NYSS19,
  YSS14,
  YSS17,
  APCYS17,
} from "@/public";

const EventAndProgram = () => {
  const [filterByYear, setFilterByYear] = useState("");

  const events = [
    {
      title: "YSS",
      year: 2014,
      image: YSS14,
      link: "/events/yss2014",
    },
    {
      title: "YSS",
      year: 2016,
      image: YSS17,
      link: "/events/yss2016",
    },
    {
      title: "GWRRT",
      year: 2014,
      image: GWRRT14,
      link: "/events/gwrrt2014",
    },
    {
      title: "GWRRT",
      year: 2016,
      image: GWRRT16,
      link: "/events/gwrrt2016",
    },
    {
      title: "GWRRT",
      year: 2018,
      image: GWRRT18,
      link: "/events/gwrrt2018",
    },
    {
      title: "NYSS",
      year: 2017,
      image: NYSS17,
      link: "/events/nyss2017",
    },
    {
      title: "NYSS",
      year: 2018,
      image: NYSS18,
      link: "/events/nyss2018",
    },
    {
      title: "NYSS",
      year: 2019,
      image: NYSS19,
      link: "/events/nyss2019",
    },
    {
      title: "APCYS",
      year: 2017,
      image: APCYS17,
      link: "/events/apcys2017",
    },
  ];

  const eventCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };

  const bgColor = {
    backgroundColor: "#009970",
    color: "white",
  };
  const handleFilterByYear = (year) => {
    setFilterByYear(year);
  };

  let filteredEvents = [...events];
  if (filterByYear) {
    filteredEvents = events.filter(
      (event) => event.year === parseInt(filterByYear)
    );
  }

  return (
    <div style={{margin:"30px 0px"}} id="events" className="mx-auto">
      <h1
        style={{ borderBottom: "2px solid #009970", color: "black" }}
        className="text-2xl font-bold text-center p-4"
      >
        Events and Programs
      </h1>

      <div
        style={{ marginTop: "20px" }}
        className="flex justify-center items-center mb-4"
      >
        <button
          onClick={() => handleFilterByYear("")}
          className={`px-2 py-1 rounded-lg ${
            filterByYear === "" ? "bg-emerald-600 text-white" : "bg-gray-300"
          } mr-2`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterByYear("2014")}
          className={`${
            filterByYear === "2014"
              ? "bg-emerald-600 text-white"
              : "bg-gray-300"
          } px-2 py-1 rounded-lg mr-2`}
        >
          {" "}
          2014{" "}
        </button>
        <button
          onClick={() => handleFilterByYear("2016")}
          className={`${
            filterByYear === "2016"
              ? "bg-emerald-600 text-white"
              : "bg-gray-300"
          } px-2 py-1 rounded-lg mr-2`}
        >
          {" "}
          2016{" "}
        </button>
        <button
          onClick={() => handleFilterByYear("2017")}
          className={`${
            filterByYear === "2017"
              ? "bg-emerald-600 text-white"
              : "bg-gray-300"
          } px-2 py-1 rounded-lg mr-2`}
        >
          {" "}
          2017{" "}
        </button>
        <button
          onClick={() => handleFilterByYear("2018")}
          className={`${
            filterByYear === "2018"
              ? "bg-emerald-600 text-white"
              : "bg-gray-300"
          } px-2 py-1 rounded-lg mr-2`}
        >
          {" "}
          2018{" "}
        </button>
        <button
          onClick={() => handleFilterByYear("2019")}
          className={`${
            filterByYear === "2019"
              ? "bg-emerald-600 text-white"
              : "bg-gray-300"
          } px-2 py-1 rounded-lg mr-2`}
        >
          {" "}
          2019{" "}
        </button>
      </div>

      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        {filteredEvents.map((event, index) => (
          <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
              <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div class="transform-gpu  p-10 space-y-10 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div style={{ textAlign: "center" }} class="font-bold">
                      <h2>
                        {event.title} <span>{event.year}</span>
                      </h2>
                      <Link
                        style={{ background: "#009970" }}
                        href="/events/yss2016"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                alt=""
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={event.image}
              />
            </div>
          </div>
        ))}
      </div>

      {/* //ending */}
    </div>
  );
};
export default EventAndProgram;
