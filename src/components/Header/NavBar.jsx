import imagen from "../../multimedia/vaypool.png";
import CartWidget from "./CartWidget";
import "../../../src/index.css";
import { Link, NavLink } from "react-router-dom";
import { baseDeDatos } from "../../service/fireBaseConfig";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const collectionCategory = collection(baseDeDatos, "categorias");
    getDocs(collectionCategory)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
          return {
            id: cat.id,
            ...cat.data(),
          };
        });
        setCategories(categorias);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="titulo">
        <Link to="/">
          <h1>Vaypool</h1>
        </Link>
        <img src={imagen} />
      </div>
      <div className="contraste">
        <div className="nav__links">
          <li>
            <Link to="/">Home</Link>
            <NavLink to="/category/Zapatillas">Zapatillas</NavLink>
            <NavLink to="/category/Remeras">Remeras</NavLink>
            <NavLink to="/category/Gorras">Gorras</NavLink>
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
}
export default NavBar;
