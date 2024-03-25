import Image from "next/image";
import React from "react";

const Sports = () => {
  const sports = [
    {
      id: 1,
      image: "https://i.ibb.co/NSDv494/Sacramento-River-Cats.jpg",
      name: "Sacramento River Cats",
      totalEvents: "48 Events",
      sportsName: "baseball",
    },
    {
      id: 2,
      image: "https://i.ibb.co/vZ6h45Y/Las-Vegas-Aviators.jpg",
      name: "Jane Smith",
      totalEvents: "28 Events",
      sportsName: "baseball",
    },
    {
      id: 3,
      image: "https://i.ibb.co/tZ1Qd5z/new-jersey-devils.jpg",
      name: "Alice Johnson",
      totalEvents: "15 Events",
      sportsName: "ice hockey",
    },
    {
      id: 4,
      image: "https://i.ibb.co/vZ6h45Y/Las-Vegas-Aviators.jpg",
      name: "Jane Smith",
      totalEvents: "28 Events",
      sportsName: "baseball",
    },
  ];

  return (
    <div>
      <h3>
        <span className="border-b-2 border-[#738FFF] text-2xl font-bold font-popp">
          Sports
        </span>
      </h3>

      <div className="cards grid grid-cols-5 gap-4">
        {sports.map((sport) => (
          <div className="card" key={sport.id}>
            <Image
              src={sport.image}
              height={100}
              width={100}
              alt="card-image"
              layout="responsive"
              className="w-11/12"
            ></Image>
            <div>{sport.name}</div>
          </div>
        ))}
        <div className="card">
          <div>Add</div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
