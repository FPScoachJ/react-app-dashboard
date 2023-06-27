/* eslint-disable react/prop-types */
import React from "react";

const NavLink = ({ link }) => {
  return (
    <div className="text-white hover:bg-white hover:text-regal-blue ease-in duration-200 h-10 flex items-center pl-2 rounded-l-full hover:cursor-pointer">
      <img className="h-5 w-5 mr-2" src={link.icon} alt="" />
      {link.name}
    </div>
  );
};

export default NavLink;
