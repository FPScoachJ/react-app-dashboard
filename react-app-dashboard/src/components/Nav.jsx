/* eslint-disable react/prop-types */
import NavLink from "./NavLink";
import dashboard from "../assets/Icons/dashboard.png";
import customers from "../assets/Icons/customers.png";
import message from "../assets/Icons/message.png";
import help from "../assets/Icons/help.png";
import settings from "../assets/Icons/settings.png";
import password from "../assets/Icons/password.png";
import signout from "../assets/Icons/signout.png";
import logo from "../assets/Icons/logo.png";
import hamburger from "../assets/Icons/hamburger.png";

const Nav = () => {
    
  const links = [
    { name: "Dashboard", icon: dashboard },
    { name: "Customers", icon: customers },
    { name: "Message", icon: message },
    { name: "Help", icon: help },
    { name: "Settings", icon: settings },
    { name: "Password", icon: password },
    { name: "Sign Out", icon: signout },
  ];
  return (
    <nav className="flex flex-col w-80 h-screen bg-regal-blue pl-3 gap-10">
      <div className="flex justify-around">
        <img className="h-10 w-10 mr-2" src={logo} alt="" />
        <h1 className="text-white text-2xl pr-10">Brand Name</h1>
        <img className="h-10 w-10 mr-2" src={hamburger} alt="" />
      </div>
      <div className="flex flex-col gap5 ">
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
