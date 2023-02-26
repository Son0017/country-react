import React from "react";
import FilterCpuntry from "../components/FilterCpuntry";
import ConutryList from "../components/ConutryList";
function Home() {
  return (
    <div>
      <FilterCpuntry />
      <ConutryList />
    </div>
  );
}

export default Home;
