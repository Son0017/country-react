import React from "react";
import { useNavigate } from "react-router-dom";
function CountryItem({ item }) {
  let navigate = useNavigate();
  return (
    <div
      className="bg-white shadown  cursor-pointer"
      onClick={() => {
        navigate(`/country/${item.cca3}`);
      }}
    >
      <div className="border border-solid">
        <img
          src={item.flags.svg}
          alt=""
          style={{ height: "160px", objectFit: "cover", width: "100%" }}
        />
      </div>
      <div className="p-6 text-sm flex flex-col gap-3">
        <h3 className="font-extrabold text-lg"> {item.name["common"]}</h3>
        <p>
          <b>Population: </b>
          <span> {item.population && item.population} </span>
        </p>
        <p>
          <b>Region: </b> <span>{item.region && item.region}</span>
        </p>
        <p>
          <b>Capital: </b>
          <span>{item.capital ? item.capital : "No capitall"}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
