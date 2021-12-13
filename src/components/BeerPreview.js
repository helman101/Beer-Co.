import React from 'react';
import BeerImg from './BeerImg';

const BeerPreview = ({ beer }) => {
  const { name, price, image_url, on_sale } = beer;

  return (
    <div className="beer-item">
      <BeerImg imgUrl={image_url} onSale={on_sale} name={name} />
      <h4>{name}</h4>
      <h3>{`${price} €`}</h3>
    </div>
  )
};

export default BeerPreview;