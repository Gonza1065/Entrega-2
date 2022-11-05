import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../../../src/index.css";

const ItemCount = ({ stock, initial = 1, prueba }) => {
  const [count, setCount] = useState(initial);
  const agregar = () => {
    count < stock && setCount(count + 1);
  };
  const restar = () => {
    count > 1 && setCount(count - 1);
  };
  const add = () => {
    prueba(count);
  };
  useEffect(() => {
    setCount(initial);
  }, [initial]);
  return (
    <div className="count">
      <p>Carrito: {count}</p>
      <div className="botones">
        <div className="agregar">
          <Button
            disabled={count === stock}
            variant="outline-warning"
            onClick={agregar}
          >
            Agregar
          </Button>{" "}
        </div>
        <Button onClick={restar} variant="warning">
          Eliminar
        </Button>{" "}
        <Button onClick={() => prueba(count)}>Agregar al Carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
