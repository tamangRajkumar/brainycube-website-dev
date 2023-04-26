import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Background = ({ heading, message }) => {
  return (
    <div id="home" className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div style={{marginTop:"90px"}} className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/learn-more">
          <button
            style={{
              background: "#009970",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              border: "none",
              borderRadius: "20px",
            }}
            className="px-8 py-2 border custom-btn"
          >
            Learn More <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Background;
