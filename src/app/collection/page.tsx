import Image from "next/image";
import React from "react";

const Collection = () => {
  const collections = [
    {
      id: 1,
      image: "https://i.ibb.co/WzYN4zF/Las-Vegas-Aviators-2.jpg",
      name: "Las Vegas Aviators",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
    {
      id: 2,
      image: "https://i.ibb.co/Y0fb1L6/Sacramento-River-Cats2.jpg",
      name: "Sacramento River Cats",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Sutter Health Park, Sacramento, California",
      collection: "Orange Collection",
    },
    {
      id: 3,
      image: "https://i.ibb.co/WzYN4zF/Las-Vegas-Aviators-2.jpg",
      name: "Las Vegas Aviators",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#18282A] to-[#221A2C] p-12">
      <div>
        <h1 className="font-bold text-4xl text-center">Collection Spotlight</h1>
        <p className="text-center font-sans text-[12px] my-4">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div className="cards grid grid-cols-5 gap-4 font-sans">
        {collections.map((collection) => (
          <div
            className="card p-3 bg-white dark:bg-[#3B3E47] shadow-md"
            key={collection.id}
          >
            <Image
              src={collection.image}
              height={100}
              width={100}
              alt="card-image"
              layout="responsive"
            ></Image>
            <h3 className="font-medium my-3 text-[17px] ">{collection.name}</h3>
            <div className="footer bg-[#F7F7F8] dark:bg-[#292B32] grid grid-cols-2 p-2">
              <div className="event">
                <p className="text-xs mb-1 ">Total Events</p>
                <h4 className="font-medium text-sm">{collection.id}</h4>
              </div>
              <div className="sports">
                <p className="text-xs mb-1 ">Sport</p>
                <h4 className="font-medium text-sm">{collection.id}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
