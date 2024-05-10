import React, { useState } from "react";
import Search from "./Search";

const FilterBar = ({ fields, onSearch }) => {
  const [activeField, setActiveField] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFieldClick = (field) => {
    setActiveField(field);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch({key: activeField, value: query});
  };

  return (
    <>
      <div>
        {fields.map((field, index) => (
          <button key={index} onClick={() => handleFieldClick(field)}>
            {field}
          </button>
        ))}
      </div>
      <Search value={searchQuery} onSearch={handleSearch} />
      <div>
        Active Field: {activeField}
        <br />
        Search Query: {searchQuery}
      </div>
    </>
  );
};

export default FilterBar;
