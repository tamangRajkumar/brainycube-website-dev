import React from "react";
import { MdGroup } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiProfit } from "react-icons/gi";

const Outcomes = () => {
  const outcomeBody = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  const content = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  };
  return (
    <div
      id="outcome"
      style={{ background: "#009970", margin: "20px 0px 20px 0px" }}
      className="mx-auto"
    >
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div className="p-4 " style={outcomeBody}>
              <MdGroup size="50px" style={{ marginRight: "5px" }} />
              <h1 className="text-3xl ">
                <b>32</b>
              </h1>
              <p style={content}>Patners</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <MdEventSeat size="50px" style={{ marginRight: "5px" }} />
              <h1 className="text-3xl">
                <b>35</b>
              </h1>{" "}
              <p style={content}>Meetings/Events</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <AiOutlineFundProjectionScreen
                size="50px"
                style={{ marginRight: "5px" }}
              />
              <h1 className="text-3xl">
                <b>28</b>
              </h1>
              <p style={content}>Project Done</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div>
            <div style={outcomeBody} class="p-4">
              <GiProfit size="50px" style={{ marginRight: "5px" }} />
              <h1 className="text-3xl">
                <b>1250</b>
              </h1>{" "}
              <p style={content}>Happy Beneficiary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;
