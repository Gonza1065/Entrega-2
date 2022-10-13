import React from "react";
import { Link } from "react-router-dom";
const Item = ({ prod }) => {
  //renderizado en el DOM de los productos
  return (
    <article className="card">
      <img src={prod.img} alt="" />
      <div className="card-info">
        <h2>{prod.title}</h2>
        <h4>{prod.price}</h4>
        <h5>{prod.category}</h5>
      </div>
      <div className="boton-de-detalles">
        <Link to={`/item/${prod.id}`}>Ver Detalles</Link>
      </div>
    </article>
  );
};

export default Item;
