import React from "react";
import Item from "./Item";
const ItemList = (props) => {
  console.log(props);
  //mapeo de los productos
  return (
    <div className="item-list">
      {props.items.map((prod) => {
        return <Item prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default ItemList;
