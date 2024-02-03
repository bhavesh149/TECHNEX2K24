// EventPage.js

import React, { useState } from "react";
import image from '../assets/images/hackathon.jpeg';
import "./EventPage.css";
import Footer2 from "../components/footer/Footer2";
import Header from "../components/header/Header";
import Header1 from "../components/header/Header1";

const EventPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");

  const eventsData = [
    {
      title: "HACKATHON",
      date: "28th-29th December",
      venue: "IIT Bombay",
      price: "INR 1650",
      amount: "Rs.50,000",
      details:
        "Duration: 12-14 hours\nM Early Bird Offer: Free Access Pass to Techfest for events such as EDM night, Robowar, Exhibition, Keynote Sessions and many more *",
    },
    // Add more events if needed
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send the new event data to the server
    console.log({ title, date, venue, price, details });
  };

  return (
    <>
    <Header1 />
    <div className="container-bg h-auto">
      <div className="shape right "></div>
      <div className="shape absolute top-[40%]"></div>
      <div className="blocks-container">
        <div className="container mx-auto mt-6">
          <div className=" ">
            <div className="w-full  p-10 flex flex-wrap my-10">
              <div className="event-box glass-bg rounded p-4 mb-4 flex-1 w-full shadow-md text-center transform hover:scale-95 transition duration-300 hover:shadow-lg relative overflow-hidden glow-shadow">
                <div className="mb-4">
                  <img src={image} alt="Event" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex justify-center">
                <button className="register-button subtle-glow bg-purple-500 hover:bg-purple-600 focus:outline-none text-white font-bold py-2 px-4 rounded-half shadow-md shadow-white align-center mr-12">
                  Register
                </button>
                <button className="register-button subtle-glow bg-purple-500 hover:bg-purple-600 focus:outline-none text-white font-bold py-2 px-4 rounded-half shadow-md shadow-white align-center ml-12">
                  Rulebook
                </button>
                </div>
              </div>
              <div className="event-box glass-bg rounded p-4 mb-4 flex-1 ml-4 w-full font-sans transform hover:scale-95 transition duration-300 hover:shadow-lg relative overflow-hidden glow-shadow">
                {eventsData.map((event, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-4xl font-extrabold mb-4 text-grey-500 animate-slow-pulse ">
                      {event.title}
                    </h3>
                    <p className="text-lg mb-4">
                      ''Code all night, Ignite your passion for coding.''
                      <br />
                      Technex - Hackathon is the fourth version of University
                      Hackathon in Nagpur under Technex, which is the Annual
                      Technical Fest of St.Vincent Pallotti College of
                      Engineering & Technology, Nagpur. It is a platform where
                      hackers, developers, innovators, entrepreneurs, students
                      can come together to create solutions to real-life
                      problems. Developers can showcase their abilities,
                      students can increase their network, innovators can create
                      new solutions.
                    </p>
                    <p className="text-lg font-bold mb-4">
                      Price Amount:{" "}
                      <span className="prize-amount">{event.amount}</span>
                    </p>
                    <div className="car">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 mb-2 md:mb-0 text-left md:text-right">
                          <p className="text-lg font-bold text-justify">
                            <b>Date:</b> {event.date}
                          </p>
                          <p className="text-lg font-bold  text-justify">
                            <b>Venue:</b> {event.venue}
                          </p>
                        </div>
                        <div className="w-full md:w-1/2 text-left md:text-right">
                          <p className="text-lg font-bold text-justify">
                            <b>Duration:</b> 12-14 Hours
                          </p>
                          <p className="text-lg font-bold text-justify">
                            <b>Price:</b> {event.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Add other event details here */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
    </>
  );
};

export default EventPage;
