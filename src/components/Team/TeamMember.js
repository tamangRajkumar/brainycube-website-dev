import { GiBrainFreeze } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import {
  Aakash,
  Ajaya,
  Subin,
  Manoj,
  Udit,
  Nimesh,
  Bikash,
  Birendra,
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
      position: "IT",
      image: Subin,
      description: "Focused on web development, data science and ML.",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      name: "Manoj Shrestha",
      position: "IT",
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
  ];
  const serviceCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };
  const cardBody = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
  };
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
                      <h1 class="text-white text-3xl font-bold">{team.name}</h1>
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
                {team.position}
              </h3>
              <p style={{textAlign:"center"}} class="text-gray-700 text-base">{team.description}</p>
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
    </div>
  );
};
export default TeamMember;
