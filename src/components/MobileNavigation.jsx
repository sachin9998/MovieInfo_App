import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../constants/navigation";

const MobileNavigation = () => {

  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full text-neutral-400 z-40">

      <div className="flex items-center justify-between h-full">

        {mobileNavigation.map((nav) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>

              <div className="text-2xl">{nav.icon}</div>

              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
