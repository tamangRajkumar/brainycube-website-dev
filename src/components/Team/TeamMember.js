import { GiBrainFreeze } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import {
  Avtar,
  Aakash,
  Ajaya,
  Subin,
  Manoj,
  Udit,
  Nimesh,
  Tarachandra,
  Bikash1,
  Babita,
  Pradip,
} from "@/public";

//icons
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const TeamMember = () => {
  const teamData = [
    {
      name: "Aakash Deo",
      position: "Engineering",
      image: Aakash,
      description:
        "Focused on solar thermal, particulate matter and robotics-related research.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Dr. Ajaya Bhattarai",
      position: "Chemestry",
      image: Ajaya,
      description:
        "Research interests surface chemistry, polymer chemistry and Nanotechnology.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "TaraChand Yadav",
      position: "Data Scientist",
      image: Tarachandra,
      description:
        "Passionate about data science, statistical modeling, and machine learning, and believes in giving back to society while also valuing spending time with family and friends.",
      facebook: "/",
      instagram: "/",
      linkedin: "https://www.linkedin.com/in/tarachand-yadav-2543a539/",
    },
    {
      name: "Bikash Dev",
      position: "Data and Insights Analyst",
      image: Bikash1,
      description:
        "Expert in python for data science and machine learning with MS Excel and Google for data analysis and Javascripts.",
      facebook: "/",
      instagram: "/",
      linkedin: "https://www.linkedin.com/in/bikash-chaudhary-1b1b1a1a0/",
    },
    {
      name: "Udit Kumar Mahato",
      position: "IT and IoT",
      image: Udit,
      description:
        "Research interest in Artifical Intelligence and Machine Learning.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Subin Satyal",
      position: "Software Engineer",
      image: Subin,
      description: "Focused on web development, data science and ML.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Manoj Shrestha",
      position: "Graphics Designer",
      image: Manoj,
      description:
        "Research Interest IOT ,HCI and user-centered design principles.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Nimesh Khulal",
      position: "Engineering",
      image: Nimesh,
      description:
        "Research interests programming, app development, robotics and rocket design.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Pradeep Aryal",
      position: "Data Science Enthusiast",
      image: Pradip,
      description:
        "Machine learning enthusiast who has conducted projects in the domain of topic classification and recommender systems.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Biman Rimal",
      position: "Engineering",
      image: Avtar,
      description:
        "Research interests programming, app development, robotics and rocket design.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Babita Sharma",
      position: "Public Health Expert and Researcher",
      image: Babita,
      description:
        "Flexible and experienced public health professional with a PhD in progress, who has published articles in national and international journals and works as a Public Health Officer at AMDA Hospital in Nepal.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "This can be You next !!",
      position: "Your Dream position",
      image: Avtar,
      description:
        "Your skill our platform. Let continue breaking impossible together",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
  ];

  return (
    <div style={{ background: "#e3e1e1" }} id="team" className="mx-auto">
      <h1
        style={{ background: "#009970", color: "white" }}
        className="text-2xl font-raleway font-bold text-center p-4"
      >
        Meet our Team Members
      </h1>

      <div class="flex flex-wrap justify-center">
        {teamData.map((team) => (
          <div
            style={{ margin: "20px" }}
            class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div class="relative pt-48 pb-16">
              <div
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ background: "white" }}
              ></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div class="bg-white rounded-full p-2">
                  <Image
                    class="h-36 w-36 rounded-full object-cover"
                    src={team.image}
                    alt="Person's name"
                  />
                  <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                    <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                      <h3 class="text-white font-bold">{team.position}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 py-4">
              <h3
                style={{ textAlign: "center" }}
                class="text-gray-900 font-bold text-xl mb-2"
              >
                {team.name}
              </h3>
              <p
                style={{
                  textAlign: "justify",
                }}
                class="text-gray-700 text-base"
              >
                {team.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <a href={team.facebook}>
                  <FaFacebook size="20px" style={{ marginRight: "8px" }} />
                </a>
                <a href={team.instagram}>
                  <BsInstagram size="20px" style={{ marginRight: "8px" }} />
                </a>{" "}
                <a href={team.linkedin}>
                  <BsLinkedin size="20px" style={{ marginRight: "8px" }} />
                </a>{" "}
                <a href={team.twitter}>
                  <FaTwitter size="20px" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* //static team members */}
      {/* <div class="flex flex-wrap justify-center">
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div
              class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ background: "white" }}
            ></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="bg-white rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Avtar}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">
                      Your Dream position
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 py-4">
            <h3
              style={{ textAlign: "center" }}
              class="text-gray-900 font-bold text-xl mb-2"
            >
              This can be You next !!
            </h3>
            <p style={{ textAlign: "center" }} class="text-gray-700 text-base">
              Your skill our platform. Let continue breaking impossible together
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="#">
                <FaFacebook size="20px" style={{ marginRight: "8px" }} />
              </a>
              <a href="#">
                <BsInstagram size="20px" style={{ marginRight: "8px" }} />
              </a>{" "}
              <a href="#">
                <BsLinkedin size="20px" style={{ marginRight: "8px" }} />
              </a>{" "}
              <a href="#">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default TeamMember;
