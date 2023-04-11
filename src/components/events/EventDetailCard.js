import React from "react";
import {GoLocation} from "react-icons/go"
import {AiOutlineCalendar} from "react-icons/ai"
import {BsCalendar4Event} from "react-icons/bs"
import {AiOutlineLink} from "react-icons/ai"


const EventDetailCard = ({year, place, date,url}) => {
  const outcomeBody = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#009970",
  };
  const content = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    textAlign: "center",
    color:"black    "
  };
  return (
    <div
      id="outcome"
      style={{ width:"60%"}}
      className="mx-auto"
    >
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-2/2 lg:w-1/4 p-4">
          <div>
            <div className="p-4 " style={outcomeBody}>
              <AiOutlineCalendar size="40px" style={{ margin: "10px" }} />
              <h4  style={{color:"black"}} >
                <b>Year</b>
              </h4>
              <p style={content}>{year} </p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <GoLocation size="40px" style={{ margin: "10px" }}/>
              <h4 style={{color:"black"}} >
                <b>Venue</b>
              </h4>{" "}
              <p style={content}>{place}</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <BsCalendar4Event
                size="40px"
                style={{ margin: "10px" }}
              />
             <h4 style={{color:"black"}}  >
                <b>Events Date</b>
              </h4>
              <p style={content}>{date}</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <AiOutlineLink size="40px" style={{ margin: "10px" }} />
              <h4 style={{color:"black"}} >
                <b>Events URL</b>
              </h4>
              <p style={content}>{url}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailCard;
