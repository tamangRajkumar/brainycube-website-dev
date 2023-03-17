import { MdGroupAdd } from "react-icons/md";
import { BiCubeAlt } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
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
    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div
          style={{ background: "#e3e1e1" }}
          class="bg-grey shadow-md rounded-md overflow-hidden"
        >
          <div class="p-4">
            <h1 class="text-lg font-semibold mb-2 font-raleway">
              {" "}
              Why we Choose Brainycube?
            </h1>
            <p style={{textAlign:"justify"}} class=" mb-2">
              BRAINYCUBE Research Organization is established with an ambitious
              vision and a dedicated mission of supplying all possible sources
              needed for different research purposes like laboratories, research
              utilities, required orientation and guidance and also by
              publishing research articles and bringing all the smart brains
              together in the conferences we host. A vision to become one of the
              largest research hubs by collaborating with eminent professors
              from all over the world
            </p>
            <a
              style={{ background: "#009970" }}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
