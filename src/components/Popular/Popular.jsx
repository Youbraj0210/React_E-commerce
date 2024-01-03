import React from "react";
import "./Popular.css";
import data_product from "../assets/data.js";
import { Items } from "../Items/Items";

export const Popular = () => {
  return (
    <div className="Popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="Popular-item">
        {data_product.map((prod) => (
          <Items key={prod.id} id={prod.id} name={prod.name} image={prod.image} new_price={prod.new_price} old_price={prod.old_price} />
        ))}
      </div>
    </div>
  );
};
