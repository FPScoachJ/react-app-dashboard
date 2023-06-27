import NavLink from "./NavLink";

const Nav = () => {
  const links = [
    { name: "Dashboard" },
    { name: "Customers" },
    { name: "Message" },
    { name: "Help" },
    { name: "Settings" },
    { name: "Password" },
    { name: "Sign Out" },
  ];
  return (
    <nav className="flex flex-col w-80 h-screen bg-regal-blue pl-3 gap-10">
      <div>
        <h1 className="text-white text-2xl">Brand Name</h1>
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
