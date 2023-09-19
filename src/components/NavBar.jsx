import { useState } from "react";
import Link from "./Link";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

function NavBar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <HiX className="text-2xl cursor-pointer" />
        ) : (
          <HiOutlineMenuAlt1 className="text-2xl cursor-pointer" />
        )}
      </div>
      <ul className={`md:flex gap-5 absolute md:static md:w-full ${open ? 'left-0' : 'left-[-500px]' } bg-gray-500 text-white z-10 h-full w-full`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
