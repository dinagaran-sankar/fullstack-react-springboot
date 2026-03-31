import React from "react";

const DropDown = ({ label, options, selectedValue, handleSort }) => {
  return (
    <div className="flex items-center gap-2 justify-end pr-14 flex-1 font-serif font-semibold">
      <label className="text-lg font-normal text-gray-700">{label}</label>
      <select
        className="px-4 py-2 text-base border rounded-1 border-y-slate-600  focus:ring focus:ring-dark focus:outline-none text-taupe-700"
        value={selectedValue}
        onChange={(event) => handleSort(event.target.value)}
      >
        {options.map((optionValues, index) => {
          return (
            <option key={index} value={optionValues}>
              {optionValues}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
