import React from "react";
import image from "../Utils/logo.png";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img
        className="w-52 px-8 py-2 bg-gradient-to-b from-black"
        src={image}
        alt="logo"
      ></img>
    </div>
  );
};

export default Header;
