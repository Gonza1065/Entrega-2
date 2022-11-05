import ItemCount from "./ItemCount.jsx";
import "../../../src/index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Button from "react-bootstrap/Button";
const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);
  const [loading, setLoading] = useState(true);
  const { addToCart, getProductQuantity } = useContext(CartContext);
  const prueba = (numero) => {
    setUnidades(numero);
    addToCart(item, numero);
  };
  const quantity = getProductQuantity(item.id);
  useEffect(() => {
    setLoading(false)
  })
  if (loading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader color="white" />
      </div>
    );
  }
  return (
    <div className="container-detail">
      <img src={item.img} alt="" />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {unidades === 0 ? (
          <ItemCount prueba={prueba} stock={item.stock} initial={quantity} />
        ) : (
          <Link to="/cart">
            <Button variant="primary">Ir al Carrito</Button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
