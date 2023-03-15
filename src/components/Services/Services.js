import { GiBrainFreeze } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const Services = () => {
  const serviceCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };
  const cardBody={
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
  }
  return (
    <div style={{ background: "#e3e1e1" }} id="about" className="mx-auto">
      <h1
        style={{ background: "#009970", color: "white" }}
        className="text-2xl font-raleway font-bold text-center p-4"
      >
        Services
      </h1>
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <GiBrainFreeze size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Research projects involvement
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Chemistry, Energy, Physics, Robotics, IT and computers, Food
                Technology, Agriculture, Fin-tech , DIY projects..
              </p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div  style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <MdModelTraining size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Training and WorkshopsMakers
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Research article writing, Analytical software (R, Python),
                Proposal writing, Web-design and graphics, Ethical Hacking, DIY
                projects (for all age categories).
              </p>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <BiWorld size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Makers Space
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Offers efficient resource utilization, mentorship, guidance, and
                project design and prototyping to empower our members to
                succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //second part of card */}
      <div class="flex flex-wrap justify-center">
        {/* second card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <MdSupportAgent size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Scientific Event Management Support
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Facilitates participation in conferences, workshops, and
                scientific meetings,promoting innovation and collaboration to
                inspire and empower the next generation of scientists and
                researchers.
              </p>
            </div>
          </div>
        </div>
        {/* second card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <FaDesktop size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Web Development
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                We work on projects of all types and sizes.Unique Desing and
                fully Responsive Having a unique website design is an important
                part of the branding and marketing process of your business.
              </p>
            </div>
          </div>
        </div>
        {/* second card3 */}
        <div  class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div style={cardBody} class="bg-white shadow-md rounded-md overflow-hidden">
            <div style={serviceCard} class="p-4">
              <AiFillCheckCircle size="40px" style={{ color: "#009970" }} />
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Digital Marketing
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Digital marketing is any form of marketing that exists online
                Massive utilization of the internet, mobile devices, social
                media, search engines, and other channels to reach consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
