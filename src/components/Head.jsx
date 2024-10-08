import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggelMenu } from "../utils/appSlice";
import {
  HAMBURGER_MENU,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
} from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleSearchClick = () => {
    // console.log(searchText?.current?.value);
  };

  const handleHamburgerClick = () => {
    dispatch(toggelMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col items-center p-4 shadow-lg">
        <div className="col-span-1 flex items-center gap-4">
          <img
            onClick={handleHamburgerClick}
            className="h-5 cursor-pointer duration-200 hover:scale-105 hover:shadow-md hover:shadow-sky-200"
            src={HAMBURGER_MENU}
            alt="menu"
          />

          {/* Link to Home Page */}
          <Link to={"/"}>
            <img className="h-8" src={YOUTUBE_LOGO} alt="youtube-logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="col-span-10 text-center">
          <label className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                className="h-5 w-5 fill-slate-300"
                src={SEARCH_ICON}
                alt="search-icon"
              />
            </span>
            <input
              ref={searchText}
              className="w-1/2 rounded-l-full border border-slate-300 bg-white py-2 pl-10 pr-3 shadow-md placeholder:italic placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-0 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          <button
            onClick={handleSearchClick}
            className="rounded-r-full border border-l-0 border-slate-300 py-2 pl-2 pr-3 text-sm font-medium text-slate-500 shadow-md transition duration-200 hover:border-sky-600 hover:bg-gradient-to-r hover:from-pink-700 hover:to-teal-500 hover:text-white hover:shadow-slate-400"
          >
            Search
          </button>
        </div>

        <div className="col-span-1">
          <Link to={"/myprofile"}>
            <img className="h-8" src={USER_ICON} alt="user-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export { Head };
