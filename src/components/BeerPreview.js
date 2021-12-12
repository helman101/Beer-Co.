import React from 'react';
import BeerImg from './BeerImg';

const BeerPreview = (props) => {
  const { name, price, image_url, on_sale, type } = props;

  return (
    <div className="imgWrapper">
      <BeerImg imgUrl={image_url} onSale={on_sale}/>
      <h4>{name}</h4>
      <h5>{`${price} €`}</h5>
    </div>
  )
};

export default BeerPreview;