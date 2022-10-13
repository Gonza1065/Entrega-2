import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { products } from "../mock/productosMock";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === Number(id));
        res(producto);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(item);
  return (
    <div className="item-list-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
