import React, { useState } from "react";
import Search from "./Search";

const FilterBar = ({ fields, onSearch }) => {
  const [activeField, setActiveField] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFieldClick = (field) => {
    if(activeField == field) field = null;
    setActiveField(field);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch({ key: activeField, value: query });
  };

  return (
    <>
      <div className="filter-bar">
        <div>
          {fields.map((field, index) => (
            <button
              className={activeField == field ? "active" : ""}
              key={index}
              onClick={() => handleFieldClick(field)}
            >
              {field}
            </button>
          ))}
        </div>
        <div>
          <Search value={searchQuery} onSearch={handleSearch} />
        </div>
      </div>

      {/* <div>
        Active Field: {activeField}
        <br />
        Search Query: {searchQuery}
      </div> */}
    </>
  );
};

export default FilterBar;
