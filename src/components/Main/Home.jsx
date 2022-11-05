import ItemListCointainer from "./ItemListContainer";
const Home = () => {
  return (
    <div>
      <div className="titulo-de-tienda">
        <h1>Tienda: Ropa deportiva</h1>
      </div>
      <div className="mostrar-los-productos">
        <ItemListCointainer />
      </div>
    </div>
  );
};
export default Home;
