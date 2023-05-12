import React, { useState, useEffect, useRef } from "react";
import { POPUP } from "@/public";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div
        className={`${
          showPopup ? "block" : "hidden"
        } fixed z-40 inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
        aria-hidden="true"
        onClick={handleClose}
      ></div>
      {showPopup && (
        <div
          className="fixed z-50 bg-gray rounded-lg shadow-lg p-4"
          ref={popupRef}
        >
          <div className="flex justify-end">
            <GiCancel
              style={{ color: "white" }}
              onClick={handleClose}
              className="h-6 w-6 text-white-500 hover:text-gray-800 cursor-pointer"
            />
          </div>
          <Image src={POPUP} alt="pop image" width={700} />
        </div>
      )}
    </div>
  );
}

export default Popup;
