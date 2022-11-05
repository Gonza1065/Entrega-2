import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect } from "react";
const Cart = () => {
  const { cart, deleteAll, deleteOne, precioTotal } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  if (loading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader color="white" />
      </div>
    );
  }
  return (
    <div className="body-de-la-lista-de-productos-añadidos">
      <div className="titulo-lista-de-productos">
        <h2>Lista de Productos</h2>
        <h2>Detalles del Producto</h2>
      </div>
      <div className="linea-de-titulos">
        <hr />
      </div>
      {cart.map((prod) => (
        <div className="productos-añadidos" key={prod.id}>
          <img src={prod.img} alt={prod.title} key={prod.id} />
          <div className="detalles-del-producto-añadido">
            <h4>{prod.title}</h4>
            <h6>${prod.price}</h6>
            <h6>Categoria: {prod.category}</h6>
            <h6>Cantidad: {prod.cantidad}</h6>
            <AiFillDelete
              size={25}
              color="red"
              onClick={() => deleteOne(prod.id)}
            />
          </div>
        </div>
      ))}
      <div className="precio-total">
        <h2>Total: ${precioTotal()}</h2>
        <hr />
      </div>
      <div className="eliminar-el-carrito">
        <h5>Borrar todo el carrito</h5>
        <a href="#">
          <AiOutlineClose size={25} onClick={deleteAll} />
        </a>
      </div>
      <div className="finalizar-compra">
        <Link to="/checkout">
          <Button variant="danger">Finalizar Compra</Button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Cart;
