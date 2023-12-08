import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";

const Dropdown = ({
  toggle,
  sortBy,
  onSortByChange,
  onOrderByChange,
  orderBy,
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
        rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Pet Name {(sortBy === "PetName") && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Owner Name {(sortBy === "ownerName") && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Date {(sortBy === "aptDate") && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc {(orderBy === "asc") && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {(orderBy === "desc") && <BiCheck />}
        </div>
      </div>
    </div>
  );
}
const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange
}) => {
  const [togglesort, setToggleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="relative rounded-md shadow-sm flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch className="text-gray-400" />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
          type="text"
          name="query"
          id="query"
          value={query}
          className="pl-8 pr-4 flex-grow rounded-md focus:ring-0 focus:border-transparent sm:text-sm bg-transparent outline-none"
          placeholder="Search"
        />
        <div className="ml-2">
          <button
            type="button"
            onClick={() => setToggleSort(!togglesort)}
            className="px-3 py-2 bg-blue-500 border border-blue-500 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 flex items-center"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort By <BiCaretDown className="ml-2" />
          </button>
          <Dropdown
            toggle={togglesort}
            sortBy={sortBy}
            onSortByChange={(mySort) => onSortByChange(mySort)}
            orderBy={orderBy}
            onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
