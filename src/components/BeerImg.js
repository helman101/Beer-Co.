import React from 'react';

const BeerImg = (props) => {
  const { imgUrl, onSale, name } = props;

  const anotherImg = 'https://previews.123rf.com/images/kongvector/kongvector2005/kongvector200513205/147673751-gloomy-face-of-glass-of-beer-cartoon-character-with-404-boards.jpg';

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = anotherImg;
  };

  return (
    <div className={`imgWrapper ${onSale && 'position-relative'}`}>
      {onSale && <div className="on-sale position-absolute">SALE</div>}
      <img src={imgUrl} alt={name} onError={handleError} />
    </div>
  );
};

export default BeerImg;
