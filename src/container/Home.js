import React from "react";
import NavAside from "../components/NavAside";
import BeerList from "./BeerList";

const Home = () => (
  <div className="d-flex justify-content-around mt-50">
    <div className="nav-aside">
      <NavAside />
    </div>
    <div className="w-80">
      <BeerList />
    </div>
  </div>
);

export default Home;
