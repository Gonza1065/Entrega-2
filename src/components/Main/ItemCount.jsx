import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../../../src/index.css";

function ItemCount(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.initial);
  console.log(count);
  const agregar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  return (
    <div className="count">
      <p>Carrito: {count}</p>
      <div className="botones">
        <div className="agregar">
          <Button
            disabled={count === props.stock}
            variant="outline-warning"
            onClick={agregar}
          >
            Agregar
          </Button>{" "}
        </div>
        <Button
          disabled={count <= props.initial}
          onClick={restar}
          variant="warning"
        >
          Eliminar
        </Button>{" "}
      </div>
    </div>
  );
}

export default ItemCount;
