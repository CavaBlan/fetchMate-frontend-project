import { useState } from "react";

function SortSelector({setSoryType}) {

  return (
    <div className="h-10 mt-5">
      <div className="h-10 mx-5 flex items-center">
        <label className="text-gray-700 font-bold text-2xl">Sort by:</label>
        <select
          className="mx-5 px-2 text-2xl bg-white border-2 rounded-2xl border-gray-300"
          onChange={(e) => {
            setSoryType(e.target.value);
          }}
        >
          <option value="breed:asc">Breed &uarr;</option>
          <option value="breed:desc">Breed &darr;</option>
          <option value="name:asc">Name &uarr;</option>
          <option value="name:desc">Name &darr;</option>
          <option value="age:asc">age &uarr;</option>
          <option value="age:desc">age &darr;</option>
        </select>
      </div>
    </div>
  );
}

export default SortSelector;
