import imagen from "../../multimedia/vaypool.png";
import CartWidget from "./CartWidget";
import "../../../src/index.css";
import {Link, NavLink} from "react-router-dom"
function NavBar() {
  return (
    <>
      <div className="titulo">
        <Link to="/category/Home">
          <h1>Vaypool</h1>
        </Link>
        <img src={imagen} />
      </div>
      <nav>
        <ul class="nav__links">
          <li>
            <NavLink to="/category/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/category/Zapatillas">Zapatillas</NavLink>
          </li>
          <li>
            <NavLink to="/category/Remeras">Remeras</NavLink>
          </li>
          <li>
            <NavLink to="/category/Gorras">Gorras</NavLink>
          </li>
          <div className="carrito-de-compras">
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
