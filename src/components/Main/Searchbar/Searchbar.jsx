import { useState } from "react";
import "./Searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="search__container">
      <input
        type="text"
        name="searchbar"
        // value={search}
        placeholder="What would you like to cook?"
        //   onChange={handleChange}
        className="searchbar"
        minLength="1"
        maxLength="50"
        //   onKeyDown={searchKeyDown}
      />
      <button className="search__icon"></button>
    </div>
  );
}

export default Searchbar;
