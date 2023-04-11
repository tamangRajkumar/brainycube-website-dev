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
        {/* //card1 */}
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
                  src={Aakash}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">Aakash Deo</h1>
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
              Engineering
            </h3>
            <p class="text-gray-700 text-base">
              Focused on solar thermal, particulate matter and robotics-related
              research.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>

            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="bg-white rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Ajaya}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">
                      Dr. Ajaya Bhattarai
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
              Chemistry
            </h3>
            <p class="text-gray-700 text-base">
              Research interests surface chemistry, polymer chemistry and
              Nanotechnology.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>

            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Udit}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">
                      Udit Kumar Mahato
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
              IT & IOT
            </h3>
            <p class="text-gray-700 text-base">
              Research interest in Artifical Intelligence and Machine Learning.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* end of first row card  */}
      </div>
      {/* //second row card */}
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>

            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Subin}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">Subin Satyal</h1>
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
              Software Engineering
            </h3>
            <p class="text-gray-700 text-base">
              Focused on web development, data and robotics-related research.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>

            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Manoj}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">
                      Manoj Shrestha
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
              Graphics Designer
            </h3>
            <p class="text-gray-700 text-base">
              Research Interest IOT ,HCI and user-centered design principles
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          style={{ margin: "20px" }}
          class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div class="relative pt-48 pb-16">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>

            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="rounded-full p-2">
                <Image
                  class="h-36 w-36 rounded-full object-cover"
                  src={Nimesh}
                  alt="Person's name"
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-500">
                  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 class="text-white text-3xl font-bold">
                      Er. Nimesh Khulal
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
            Engineering
            </h3>
            <p class="text-gray-700 text-base">
              Research interests programming, app development, robotics and
              rocket design
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <a href="/">
                <FaFacebook size="20px" style={{ marginRight: "5px" }} />
              </a>
              <a href="/">
                <BsInstagram size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <BsLinkedin size="20px" style={{ marginRight: "5px" }} />
              </a>{" "}
              <a href="/">
                <FaTwitter size="20px" />
              </a>
            </div>
          </div>
        </div>
        {/* end of second row card */}
      </div>
      {/* third row card */}
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}

        {/* card2 */}

        {/* card 3 */}
        {/* third row card */}
      </div>
    </div>
  );
};
export default TeamMember;
