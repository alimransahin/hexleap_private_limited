"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./style.css";
import { Button } from "@/components/ui/button";
export default function SimpleSlider() {
  const collections = [
    {
      id: 1,
      image: "https://i.ibb.co/VttdRmy/Ticket-Mockup-4.png",
      name: "Las Vegas Aviators",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
    {
      id: 2,
      image: "https://i.ibb.co/6YJCpkP/unnamed-1.png",
      name: "Sacramento River Cats",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Orange Collection",
    },

    {
      id: 3,
      image: "https://i.ibb.co/VttdRmy/Ticket-Mockup-4.png",
      name: "Las Vegas Aviators",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Take Flight Collection",
    },
    {
      id: 4,
      image: "https://i.ibb.co/6YJCpkP/unnamed-1.png",
      name: "Sacramento River Cats",
      date: "Oct 15",
      day: "Sun",
      time: "4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection: "Orange Collection",
    },
  ];
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider px-28",
  };
  return (
    <Slider {...settings}>
      {collections.map((collection) => (
        <div
          className="card bg-white dark:bg-[#3B3E47] drop-shadow-lg"
          key={collection.id}
        >
          <Image
            src={collection.image}
            height={100}
            width={100}
            alt="card-image"
            layout="responsive"
            className="pt-3"
          ></Image>
          <div className="footer px-5 text-center relative">
            <div className="ellipse w-5 h-5 rounded-full bg-[#ECF0F6] dark:bg-[#1F1E2B] absolute top-[-10px] left-[-10px]"></div>
            <div className="ellipse w-5 h-5 rounded-full bg-[#ECF0F6] dark:bg-[#1F1E2B] absolute top-[-10px] right-[-10px]"></div>
            <h3 className="font-medium pt-3 mx-3 text-xl border-t-2 border-[#818A97] border-dashed ">
              {collection.name}
            </h3>
            <p className="text-md">
              {collection.date} | {collection.day} | {collection.time}
            </p>
            <p className="text-md text-[#dfdfdf]">{collection.address}</p>
            <Button className="rounded-none bg-black w-full text-white hover:bg-black my-3">
              {collection.collection}
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  );
}
