import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BeerImg from "./BeerImg";
import { changeItem } from "../slice/item/itemSlice";

const BeerPreview = ({ beer }) => {
  const { name, price, image_url, on_sale } = beer;
  const dispatch = useDispatch();

  return (
    <Link
      to="/Beer"
      onClick={() => dispatch(changeItem(beer))}
      className="beer-item"
    >
      <BeerImg imgUrl={image_url} onSale={on_sale} name={name} />
      <h4>{name}</h4>
      <h2>{`${price} €`}</h2>
    </Link>
  );
};

export default BeerPreview;
