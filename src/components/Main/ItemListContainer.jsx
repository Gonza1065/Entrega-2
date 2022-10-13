import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../mock/productosMock";
import { useParams } from "react-router-dom";
const ItemListCointainer = () => {
  const [items, setItems] = useState([]);

  const valor = useParams();
  console.log(valor.categoryName);

  const { categoryName } = useParams();
  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = products.filter((prod) => prod.category === categoryName);
        res(categoryName ? prodFiltrados : products);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);
  return (
    <main>
      <div className="item-list-container">
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default ItemListCointainer;
