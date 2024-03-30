import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sports = () => {
  const sports = [
    {
      id: 1,
      image: "https://i.ibb.co/NSDv494/Sacramento-River-Cats.jpg",
      name: "Sacramento River Cats",
      totalEvents: "48 Events",
      sportsName: "Baseball",
    },
    {
      id: 2,
      image: "https://i.ibb.co/vZ6h45Y/Las-Vegas-Aviators.jpg",
      name: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sportsName: "Baseball",
    },
    {
      id: 3,
      image: "https://i.ibb.co/tZ1Qd5z/new-jersey-devils.jpg",
      name: "New Jersey Devils",
      totalEvents: "15 Events",
      sportsName: "Ice Hockey",
    },
    {
      id: 4,
      image: "https://i.ibb.co/vZ6h45Y/Las-Vegas-Aviators.jpg",
      name: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sportsName: "Baseball",
    },
  ];

  return (
    <div>
      <h3 className="mb-8">
        <span className="border-b-2 pb-1 border-[#738FFF] text-2xl font-bold ">
          Sports
        </span>
      </h3>

      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 font-sans">
        {sports.map((sport) => (
          <div
            className="card p-3 bg-white dark:bg-[#3B3E47] shadow-md"
            key={sport.id}
          >
            <Image
              src={sport.image}
              height={100}
              width={100}
              alt="card-image"
              layout="responsive"
            ></Image>
            <h3 className="font-medium my-3 text-lg ">{sport.name}</h3>
            <div className="footer bg-[#F7F7F8] dark:bg-[#292B32] grid grid-cols-2 p-2">
              <div className="event">
                <p className="text-xs mb-1 ">Total Events</p>
                <h4 className="font-medium text-sm">{sport.totalEvents}</h4>
              </div>
              <div className="sports">
                <p className="text-xs mb-1 ">Sport</p>
                <h4 className="font-medium text-sm">{sport.sportsName}</h4>
              </div>
            </div>
          </div>
        ))}
        <div className="card p-3 bg-white dark:bg-[#3B3E47] relative ">
          <div className="border-[1px] dark:border-0 border-[#006555] h-full">
            <Image
              src="https://i.ibb.co/9HmxbRJ/add.png"
              height={100}
              width={100}
              alt="add"
              layout="responsive"
            ></Image>
            <div className="absolute top-[.78rem] right-[.78rem] bg-black text-white text-sm px-4 py-0.5">
              Ad
            </div>
            <h2 className="font-semibold text-2xl text-center mt-4">
              Advertisement title
            </h2>
            <p className="text-sm p-2 text-[#525965] dark:text-[#dfdfdf]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center my-12">
        <Button className="text-white bg-[#2C9CF0] rounded-sm font-semibold py-6 px-8 ">
          See More
        </Button>
      </div>
    </div>
  );
};

export default Sports;
