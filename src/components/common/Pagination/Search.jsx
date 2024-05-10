import React, { useState } from 'react';

const Search = ({ value, onSearch }) => {
  const [state, setState] = useState(value);

  const handleOnClick = (state) => {
    onSearch(state);
  }

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
        placeholder="Search..."
      />
      <button onClick={() => handleOnClick(state)}>Search</button>
    </div>
  );
};

export default Search;
