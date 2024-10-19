import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { toggelMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS, YOUTUBE_LOGO } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();

  // Debounce Hook
  const debouncedSearchTerm = useDebouncedValue(searchQuery, 200);

  const handleHamburgerClick = () => {
    dispatch(toggelMenu());
  };

  // When I will click the search button
  const handleSearchButtonClick = () => {
    // console.log(searchQuery);
  };

  // Search suggestion api calling function
  const getSearchSuggestions = async () => {
    const response = await fetch(SEARCH_SUGGESTIONS + debouncedSearchTerm);
    const data = await response.json();

    setSearchSuggestions(data[1]);
  };

  useEffect(() => {
    getSearchSuggestions();
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="fixed grid w-full grid-flow-col items-center bg-white p-4 shadow-lg">
        <div className="col-span-1 flex items-center gap-4">
          <RxHamburgerMenu
            onClick={handleHamburgerClick}
            className="h-7 w-7 cursor-pointer"
          />

          {/* Link to Home Page */}
          <Link to={"/"}>
            <img className="h-8" src={YOUTUBE_LOGO} alt="youtube-logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="col-span-10 text-center">
          {/* Search box-button */}
          <div>
            <label className="relative">
              <span className="absolute inset-y-0 pl-3">
                <GoSearch className="h-5 w-5" />
              </span>
              <input
                className="w-1/2 rounded-l-full border border-slate-300 bg-white py-2 pl-10 pr-3 shadow-md placeholder:italic placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
            <button
              onClick={handleSearchButtonClick}
              className="rounded-r-full border border-l-0 border-slate-300 py-2 pl-2 pr-3 text-sm font-medium text-slate-500 shadow-md transition duration-200 hover:border-sky-600 hover:bg-gradient-to-r hover:from-pink-700 hover:to-teal-500 hover:text-white hover:shadow-slate-400"
            >
              Search
            </button>
          </div>

          {/* Search Suggestions */}
          {searchSuggestions.length > 0 && (
            <div className="fixed z-20 m-1 w-[25%] rounded-xl bg-gray-200 px-5 py-3">
              <ul className="flex cursor-pointer flex-col gap-3 font-semibold">
                {searchSuggestions?.map((value) => (
                  <li
                    key={value}
                    onClick={() => setSearchQuery(value)}
                    className="rounded bg-slate-300 px-2 py-1 shadow-sm duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-200"
                  >
                    <span className="flex items-center gap-2">
                      <FaSearchengin className="h-5 w-5 shrink-0" /> {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1">
          <Link to={"/profile"}>
            <FaUserCircle className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </>
  );
};

export { Head };
