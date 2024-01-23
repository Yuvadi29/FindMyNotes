import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  const user = useSelector((state) => state.user.userData);

  const username = user.userName;

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const notes = await axios.get("http://localhost:7000/notes/getFiles", {
        params: {
          title: searchQuery,
        },
      });
      // console.log(notes);

      if (notes.data.data.length > 0) {
        setSearchResults(notes.data.data);
        setSearchStatus("found");
      } else {
        setSearchResults([]);
        setSearchStatus("not-found");
      }
    } catch (error) {
      console.log("Error Fetching Data: ", error);
    }
  };

  const showPDF = async (files) => {
    window.open(`http://localhost:7000/files/${files}`, "_blank", "noreferrer");
  };

  return (
    <div className="flex min-h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form onSubmit={handleSearch} className="w-full max-w-[700px]">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for Notes"
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid h-auto w-full grid-cols-1 gap-5 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchStatus === "found" &&
          searchResults.length > 0 &&
          searchResults.map((notes) => (
            <div
              key={notes._id}
              className="flex w-full max-w-[300px] flex-wrap-reverse items-center justify-between rounded-xl bg-[#374151] px-3 py-2 text-white shadow-lg"
            >
              <p className="mt-2text-sm">
                <span className="font-bold">File Name : </span>{" "}
                <span>{notes.fileName}</span>
              </p>
              <button
                className="rounded-lg bg-[#2563eb] px-2 py-1 font-semibold text-white hover:bg-[#1558e7]"
                onClick={() => showPDF(notes.files)}
              >
                Show Pdf
              </button>
            </div>
          ))}

        {searchStatus === "not-found" && (
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            No Notes Found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
