import React from "react";

const SearchBox = ({ label, placeholder, value, handleSearch }) => {
  return (
    <div className="flex items-center gap-2 pl-8 flex-1 font-serif font-semibold">
      <label className="text-lg font-normal text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 text-base border rounded-1 border-y-slate-600  focus:ring focus:ring-dark focus:outline-none text-taupe-700"
        value={value}
        onChange={(event) => handleSearch(event.target.value)} //,event u can decalre
      />
    </div>
  );
};

export default SearchBox;
