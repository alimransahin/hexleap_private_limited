import React from "react";
import SimpleSlider from "./CaroselSlide";

const Collection = () => {
  return (
    <div className="bg-gradient-to-b from-[#FBF8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] p-20">
      <div>
        <h1 className="font-bold text-4xl text-center">Collection Spotlight</h1>
        <p className="text-center font-sans text-[12px] my-4">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div className="cards font-sans">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Collection;
