import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "../link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Recipes", path: "/recipes" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Login", path: "/login" },
  ];

  return (
    <nav className=" p-6 ">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`grid gap-2 lg:gap-6 px-6 py-2 shadow-xl md:flex  absolute md:static duration-500 bg-green-400 text-black ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
