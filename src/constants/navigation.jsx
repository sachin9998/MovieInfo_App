import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <MdHomeFilled />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
