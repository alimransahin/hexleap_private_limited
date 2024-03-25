import React from "react";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
  return (
    <div className="navbar flex my-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hexleap</a>
      </div>
      <div className="flex-none">
        <ToggleMode />
      </div>
    </div>
  );
};

export default Navbar;
