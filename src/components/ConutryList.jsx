import React, { useEffect, useState } from "react";
import CountryItem from "./CountryItem";
import { getData } from "../hooks/useFetch";
import Loading from "./Loading";
import { hireContext } from "../hooks/useContext";
function ConutryList() {
  const { data, error, isPending } = getData(
    "https://restcountries.com/v3.1/all"
  );
  let [newData, setNewData] = useState(null);
  const { filter, inputChange } = hireContext();
  useEffect(() => {
    data && setNewData(data);
  }, [data]);
  useEffect(() => {
    if (data) {
      let setData;
      if (inputChange === "" && filter.toLowerCase() === "all") {
        setData = data;
      } else if (inputChange) {
        setData = data.filter((item) => {
          return item.name.common
            .toLowerCase()
            .includes(inputChange.toLowerCase());
        });
      } else if (filter !== "all") {
        setData = data.filter((item) => {
          return item.region.toLowerCase() === filter;
        });
      }
      setNewData(setData);
    }
  }, [filter, inputChange]);

  return (
    <div className="grids place-content-center sm:place-content-start">
      {isPending && <Loading />}
      {error && <div>{error}</div>}
      {newData &&
        newData.map((item) => {
          return (
            <div key={item.name.common}>
              <CountryItem item={item} />
            </div>
          );
        })}
    </div>
  );
}

export default ConutryList;
