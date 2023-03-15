import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
// import { Image2 } from "@/public";
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
  const eventCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };
  return (
    <div id="about" className="mx-auto">
      <h1
        style={{ borderBottom: "2px solid #009970", color: "black" }}
        className="text-2xl font-bold text-center p-4"
      >
        Events and Programs
      </h1>
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"YSS"</h2>
                    <p>2014</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={YSS14}
            />
          </div>
        </div>

        {/* card2 */}

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"GWRRT"</h2>
                    <p>2014</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={GWRRT14}
            />
          </div>
        </div>

        {/* card3 */}

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"GWRRT"</h2>
                    <p>2016</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={GWRRT16}
            />
          </div>
        </div>
      </div>
      {/* second card starting */}
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"YSS"</h2>
                    <p>2017</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={YSS17}
            />
          </div>
        </div>

        {/* //card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"NYSS"</h2>
                    <p>2017</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={NYSS17}
            />
          </div>
        </div>

        {/* card3 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"NYSS"</h2>
                    <p>2018</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={NYSS18}
            />
          </div>
        </div>
      </div>
      {/* third row starting */}
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"NYSS"</h2>
                    <p>2018</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={NYSS18}
            />
          </div>
        </div>

        {/* card2 */}

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"GWRRT"</h2>
                    <p>2018</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={GWRRT18}
            />
          </div>
        </div>

        {/* card3 */}

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div style={{ textAlign: "center" }} class="font-bold">
                    <h2>"NYSS"</h2>
                    <p>2019</p>
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
            </div>
            <Image
              alt=""
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={NYSS19}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventAndProgram;
