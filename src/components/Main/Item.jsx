import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Item = ({ prod }) => {
  return (
    <article className="card">
      <div className="imagen-de-la-prenda-sola">
        <img src={prod.img} alt="" />
      </div>
      <div className="card-info">
        <h2>{prod.title}</h2>
        <h4>${prod.price}</h4>
        <h5>Categoria: {prod.category}</h5>
      </div>
      <div className="boton-de-detalles">
        <Link to={`/item/${prod.id}`}>
          <Button variant="outline-success">Ver Detalles</Button>{" "}
        </Link>
      </div>
    </article>
  );
};

export default Item;
