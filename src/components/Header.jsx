import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user_icon from "../assets/user.png";
import { navigation } from "../constants/navigation";

const Header = () => {
  const location = useLocation();
  // const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(location.search.slice(3));
  const navigate = useNavigate();

  console.log(location.search.slice(3), "::::");


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {

    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }

  }, [searchInput]);

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="Movie Site Info Logo" width={120} />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label + "header" + index}>
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

          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
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
