import { IoSearchOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user_icon from "../assets/user.png";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const navigation = [
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movies",
    },
  ];

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput]);

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-3 flex items-center h-full">
        {/* Logo */}
        <div>
          <img src={logo} alt="Movie Site Info Logo" width={120} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        {/* Search Box & User Icon*/}
        <div className="ml-auto flex items-center gap-5">
          {/* User Input */}

          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
            />

            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>

          {/* User Icon */}
          <div className="w-8 h-8 overflow-hidden rounded-full cursor-pointer active:scale-50 transition-all">
            <img src={user_icon} alt="User Icon" className="w-full h-full   " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
