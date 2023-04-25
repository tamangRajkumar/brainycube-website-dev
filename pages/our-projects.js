
import { GiBrainFreeze } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import EventCard from "@/src/components/events/EventCard";
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
import Footer from "@/src/components/HeaderFooter/Footer";


const TeamMember = () => {
  const projects = [
    {
      title: "GWRRT-2014",
      image: GWRRT14,
      description:
        "Focused on solar thermal, particulate matter and robotics-related research.",
    
    },
    {
      title: "NYSS-2017",
      image: NYSS17,
      description:
        "Research interests surface chemistry, polymer chemistry and Nanotechnology.",
     
    },
    {
      title: "YSS-2014",
      image: YSS14,
      description:
        "Experience in data science and skilled in machine learning, predictive modeling, statistical techniques, and data visualization.",
    },
    {
      title: "APCYS-2017",
      image: APCYS17,
      description:
        "Expert in python for data science and machine learning with MS Excel and Google for data analysis and Javascripts.",
      
    },
  ];

  return (
    <div id="team" className="mx-auto">
      <h1
        style={{ background: "#009970", color: "white" }}
        className="text-2xl font-raleway font-bold text-center p-4"
      >
        Our Projects
      </h1>
      <EventCard
          title=" The Future is in young Talents"
          description="This was organized in collaboration with other organizations. This event was designed and brought by Brainycube member Akash Deo, and with the support of team member, it was successfully organized at Hotel Pacific, Kathmandu on 4-5 June 2016. Around 50 young scientists participated in the event from a different stream of science and level of studies. The participant also presented their research and projects and the best were awarded Young scientist award and Junior scientist award. The event also compromise lectures and panel discussion by different scientists, entrepreneurs and experts from Nepal, India, Germany, Malaysia, Poland and Indonesia"
        />
      <div style={{ margin:"20px"}}  class="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div style={{ margin:"20px"}}  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-600 dark:border-gray-600">
          <a href="#">
            <Image
              class="rounded-t-lg"
              src={project.image}
              alt="GWRRT"
              width={500}
              height={200}
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-600 dark:text-black">
                {project.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-black-400">
              {project.description}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-greeb-300 dark:bg-green-700 dark:hover:bg-grey-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        ))}
      </div>
      {/* //footer */}
      <Footer/>
    </div>
  );
};
export default TeamMember;
