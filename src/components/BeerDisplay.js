import React from "react";
import { useSelector } from "react-redux";
import BeerImg from "./BeerImg";

const BeerDisplay = () => {
  const { image_url, name, on_sale, type, price } = useSelector((state) => state.item.currentBeer);

  return (
    <div className="d-flex justify-content-around mt-50">
      <div className="d-img">
        <BeerImg imgUrl={image_url} onSale={on_sale} />
      </div>
      <div className="d-info">
        <h4>{type}</h4>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
          ultricies metus, eu aliquet nulla. Cras viverra felis eget nulla
          laoreet molestie. Aenean molestie justo sed magna cursus interdum.
          Vestibulum dignissim, elit vel pellentesque porta, nisi libero
          fermentum enim, sed semper diam est at erat. Pellentesque id lorem
          feugiat, elementum tortor vitae, finibus lorem. Aliquam lacinia sed
          leo quis condimentum. Etiam pulvinar nulla nec rhoncus rutrum. Duis
          interdum, elit id porttitor pharetra, mauris arcu malesuada sapien,
          nec tristique metus odio et augue. Aenean in arcu tortor. Maecenas
          pharetra ultrices sapien at bibendum. Donec rutrum, tortor eu
          vestibulum semper, libero justo posuere turpis, eget ultrices odio
          tortor non leo. In venenatis non risus eu laoreet. Quisque ac dui
          pellentesque, tincidunt dolor ac, pellentesque nibh. Etiam commodo
          tristique diam, id pellentesque erat.
        </p>
        <h2>{`${price} €`}</h2>
      </div>
    </div>
  );
};

export default BeerDisplay;
