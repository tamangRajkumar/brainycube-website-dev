import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
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
  const [sortByYear, setSortByYear] = useState("");

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

  const handleSortByYear = (event) => {
    setSortByYear(event.target.value);
  };

  let sortedEvents = [...events];
  if (sortByYear) {
    sortedEvents = events.filter(
      (event) => event.year === parseInt(sortByYear)
    );
  }

  return (
    <div id="events" className="mx-auto">
      <h1
        style={{ borderBottom: "2px solid #009970", color: "black" }}
        className="text-2xl font-bold text-center p-4"
      >
        Events and Programs
      </h1>
      <div style={{marginTop:"20px"}} className="flex justify-center items-center mb-4">
        <label htmlFor="sort-year" className="mr-2">
          Sort by year:
        </label>
        <select
          id="sort-year"
          value={sortByYear}
          onChange={handleSortByYear}
          className="px-2 py-1 rounded-lg"
        >
          <option value="">All years</option>
          <option value="2014">2014</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      </div>
    
      <div class="flex flex-wrap justify-center">
         {/* //card1 */}
         {sortedEvents.map((event, index) => (
         <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
           <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
             <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                  
                     <h2>{event.title}</h2>
                    <p>{event.year}</p>
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
