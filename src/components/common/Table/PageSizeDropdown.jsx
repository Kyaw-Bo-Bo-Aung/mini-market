import React, { useState } from "react";

const PageSizeDropdown = ({ options, selectedPageSize, onSizeChange }) => {
  const [selectValue, setSelectValue] = useState(selectedPageSize);
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    onSizeChange(value);
  };
  return (
    <div className="select-container">
      <select value={selectedPageSize} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSizeDropdown;
