import React from "react";
import { useSelector } from "react-redux";
import BeerPreview from "../components/BeerPreview";
import { Pagination } from "../components/Pagination";

const BeerList = () => {
  const beerList = useSelector((state) => state.beers.currentList);
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex flex-wrap beer-list">
        {beerList.map((beer) => (
          <BeerPreview key={beer.beer_id} beer={beer} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default BeerList;
