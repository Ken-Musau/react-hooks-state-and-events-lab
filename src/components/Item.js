import React, { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false);

  const itemClass = cartStatus ? "in-cart" : "";
  const status = cartStatus ? "Remove From Cart" : "Add to Cart";
  const buttonClass = cartStatus ? "remove" : "add";
  const clickHandle = () => {
    setCartStatus(!cartStatus);
  };
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={clickHandle}>
        {status}
      </button>
    </li>
  );
}

export default Item;
