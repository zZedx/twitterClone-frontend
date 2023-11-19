import { useRef, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import SearchResults from "./SearchResults";

const Search = ({ addClass }) => {
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  const handleDivClick = (e) => {
    e.stopPropagation();
    inputRef.current.focus();
  };
  return (
    <>
      <div
        className={`py-2 fixed top-0 z-50 flex items-center h-16 bg-black border bg-opacity-80 backdrop-blur-lg ${addClass}`}
      >
        <div
          onClick={handleDivClick}
          className="flex items-center w-full h-full gap-4 px-6 rounded-full group bg-secondary focus-within:outline outline-brand outline-1"
        >
          <label
            htmlFor="search"
            className="text-xl text-white/40 group-focus-within:text-brand"
          >
            <HiOutlineMagnifyingGlass />
          </label>
          <input
            autoComplete="off"
            ref={inputRef}
            type="text"
            id="search"
            className="w-full text-white bg-transparent outline-none"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {query && <SearchResults query={query} />}
      </div>
    </>
  );
};

export default Search;
