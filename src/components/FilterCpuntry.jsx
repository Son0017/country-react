import React, { useState } from "react";

import { hireContext } from "../hooks/useContext";

function FilterCpuntry() {
  const { changeFilter, changeInput } = hireContext();
  // console.log(inputChange);

  const [filterCh, setFilterCH] = useState("All");

  return (
    <div className="flex md:justify-between md:flex-row flex-col gap-[12px] mb-12">
      <form className="py-4 px-8 border-solid border sm:w-[480px] w-[290px]  rounded bg-white shadown">
        <label className="flex gap-5 items-center">
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search">
                <path
                  id="icon-search-black"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                  fill="#848484"
                />
              </g>
            </svg>
          </div>
          <input
            onChange={(e) => {
              changeInput(e.target.value.trim());
            }}
            type="text"
            className="px-1 focus:outline-none hover:outline-none"
            placeholder="Search for a country…"
          />
        </label>
      </form>
      <div className="w-[200px] px-6 relative cursor-pointer alldropdawn flex flex-col bg-white rounded capitalize shadown">
        <p className="py-4 gap-[12px] ">
          {filterCh}
          {/* <option value="africa">Africa</option> */}
        </p>
        <div
          onClick={(e) => {
            changeFilter(e.target.innerText.toLowerCase());
            setFilterCH(e.target.innerText);
          }}
          className="absolute top-[58px]  left-[0] h-[0] truncate  rounded  shadown bg-white w-full dropdawn"
        >
          <div className="px-6 cursor-pointer py-2">all</div>
          <div className="px-6 cursor-pointer py-2">africa</div>
          <div className="px-6 cursor-pointer py-2">americas</div>
          <div className="px-6 cursor-pointer py-2">asia</div>
          <div className="px-6 cursor-pointer py-2">europe</div>
          <div className="px-6 cursor-pointer py-2">oceania</div>
        </div>
      </div>
    </div>
  );
}

export default FilterCpuntry;
