import React from "react";
import Image from "next/image";
import { Logo } from "@/public";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkjayvo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
    background: "#e3e1e1",
  };
  return (
    <div
      style={{ background: "#009970", margin: "-32px 0px 0px 0px " }}
      id="contact"
      className="  mx-auto"
    >
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div
            style={{ margin: "25px" }}
            class="grid grid-cols-1 md:grid-cols-2"
          >
            <div class="p-6 mr-2 bg-gray-100  sm:rounded-lg">
              <h1 class="text-4xl sm:text-4xl text-gray-800  font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-500 mt-2">
                Fill in the form to start a conversation
              </p>

              <div class="flex items-center mt-8 text-gray-600 dark:text-gray-600">
                <GoLocation size="30px" style={{ color: "#009970" }} />
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  Kathmandu, Nepal
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-800 dark:text-gray-600">
                <IoCall size="30px" style={{ color: "#009970" }} />
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  01-4423736/441725
                </div>
              </div>

              <div class="flex items-center mt-2 text-gray-600 dark:text-gray-600">
                <HiOutlineMail size="30px" style={{ color: "#009970" }} />
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  info@brainycube.org.np
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              class="p-6 flex flex-col justify-center"
            >
              <div class="flex flex-col">
                <label for="name" class="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2 py-3 px-3 rounded-lg  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="w-100 mt-2 py-3 px-3 rounded-lg  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Contact Number"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div class="flex flex-col mt-2">
                <label for="message" class="hidden">
                  Message
                </label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                class="md:w-32 border border-white-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-500 transition ease-in-out duration-300"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
