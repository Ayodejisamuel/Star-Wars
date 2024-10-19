import React from "react";
import { useEffect, useState } from "react";
import "./input.css";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ setSearchQuery, value }) => {
  const [searchDelay, setSearchDelay] = useState(value);

  const handleSearchChange = (e) => {
    setSearchDelay(e.target.value);
  };
  // Debounce search input to prevent rapid requests
  useEffect(() => {
    const delayInput = setTimeout(() => {
      setSearchQuery(searchDelay.toLowerCase());
    }, 600);
    return () => clearTimeout(delayInput);
  }, [searchDelay, setSearchQuery]);

  return (
    <div className="input-div">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={searchDelay}
        placeholder="Search by name"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
