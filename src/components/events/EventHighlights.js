import Image from "next/image";
import Link from "next/link";
// import { Image2 } from "@/public";

const EventHightlights = ({pht1,pht2,pht3}) => {
  return (
    <div id="events" className="mx-auto">
      <h1
        style={{ borderBottom: "2px solid #009970", color: "black" }}
        className="text-2xl font-bold text-center p-4"
      >
        Events Highlights
      </h1>
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={pht1}
            />
          </div>
        </div>
        {/* //card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={pht2}
            />
          </div>
        </div>
        {/* //card3 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={pht3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventHightlights;
