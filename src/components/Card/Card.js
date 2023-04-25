import { MdGroupAdd } from "react-icons/md";
import { BiCubeAlt } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
const Card = () => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const cardBody = {
    background: "#e3e1e1",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
  };
  return (
    <div style={{ margin: "20px" }} class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div
          style={{ background: "#e3e1e1" }}
          class="bg-grey shadow-md rounded-md overflow-hidden"
        >
          <div class="p-5">
            <h1 class="text-lg font-semibold mb-2 font-raleway">
              {" "}
              Why we Choose Brainycube?
            </h1>
            <ul>
              <ul>
                <li>
                  <span class="ml-2">&#8226;</span> Publishes research articles
                </li>
                <li>
                  <span class="ml-2">&#8226;</span> Supplies research sources
                  and publishes articles
                </li>
                <li>
                  <span class="ml-2">&#8226;</span> Hosts conferences to bring
                  smart brains together
                </li>
                <li>
                  <span class="ml-2">&#8226;</span> Vision to become one of the
                  largest research hubs
                </li>
                <li>
                  <span class="ml-2">&#8226;</span> Collaboration with
                  professors from around the world
                </li>
              </ul>
            </ul>
            <a
              style={{ background: "#009970", marginTop: "10px" }}
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* //card1 */}
      <div class="w-full sm:w-1/2 lg:w-1/4 p-4 ">
        <div style={cardBody} class="bg-grey shadow-md ">
          <div style={cardStyle} class="p-4">
            <MdGroupAdd size="40px" style={{ color: "#009970" }} />
            <h2 style={{ padding: "10px" }} class="text-lg font-semibold mb-2">
              Involvement
            </h2>
            <p class="mb-2">
              We involve young minds with our organization to work together and
              shape there skills with all available resources.
            </p>
            <a
              style={{ background: "#009970" }}
              href="https://forms.gle/vCBGsKE1QRisPZSp6"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      {/* card2 */}
      <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div
          style={cardBody}
          class="bg-white shadow-md rounded-md overflow-hidden"
        >
          <div style={cardStyle} class="p-4">
            <BiCubeAlt size="40px" style={{ color: "#009970" }} />
            <h2 style={{ padding: "10px" }} class="text-lg font-semibold mb-2">
              Innovation
            </h2>
            <p class=" mb-2">
              All the involved like minded young talents are encouraged to
              showcase there skills to come up with new innovations.
            </p>
            <a
              style={{ background: "#009970" }}
              href="/our-projects"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>
      {/* card3 */}
      <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div
          style={cardBody}
          class="bg-white shadow-md rounded-md overflow-hidden"
        >
          <div style={cardStyle} class="p-4">
            <IoMdPhotos size="40px" style={{ color: "#009970" }} />
            <h2 style={{ padding: "10px" }} class="text-lg font-semibold mb-2">
              Implementation
            </h2>
            <p class=" mb-2">
              All the innovations, advancements, breakthroughs, inventions,
              discoveries, and developments are meant to solve problems of a
              society or a particular person.
            </p>
            <a
              style={{ background: "#009970" }}
              href="commercial-projects"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
              target="_blank"
            >
              Commercial Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
