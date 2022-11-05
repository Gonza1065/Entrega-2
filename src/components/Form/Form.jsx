import { useContext } from "react";
import { useState } from "react";
import { baseDeDatos } from "../../service/fireBaseConfig";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, precioTotal, deleteAll } = useContext(CartContext);
  const totalPrice = precioTotal();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const order = {
      buyer: { name, lastName, email, repeatEmail },
      items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };
    const ordersCollection = collection(baseDeDatos, "orders");
    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        deleteAll();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeRepeatEmail = (e) => {
    setRepeatEmail(e.target.value);
  };

  if (orderId) {
    return (
      <div className="numero-de-seguimiento">
        <h3>Gracias por tu compra, tu numero de seguimiento es:</h3>
        <hr />
        <h1>${orderId}</h1>
      </div>
    );
  }
  return (
    <div className="body-de-el-formulario">
      <div className="titulo-de-formulario">
        <h1>Formulario de finalización de compra</h1>
        <hr />
      </div>
      <div className="subtitulo">
        <h3>
          ¡Llene el formulario con sus datos y a continuación aparecerá su codigo
          de seguimiento!
        </h3>
      </div>
      <div className="formulario">
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChangeName}
            value={name}
          ></input>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={handleChangeLastName}
            value={lastName}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Repetir Email"
            onChange={handleChangeRepeatEmail}
            value={repeatEmail}
          ></input>
          <div className="boton-finalizar">
            <button className="boton">
              {loading ? (
                <div>
                  <h5>Enviando...</h5>
                </div>
              ) : (
                <div>
                  <h6>Enviar</h6>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
