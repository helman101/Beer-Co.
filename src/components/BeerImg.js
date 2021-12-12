import React from 'react'

const BeerImg = (props) => {
  const { imageUrl, onSale } = props;

  return (
    <div className="imgWrapper">
      {onSale && <div className="onSale">SALE</div>}
      <img src={imageUrl} alt="beer cup icon"/>
    </div>
  )
};

export default BeerImg;