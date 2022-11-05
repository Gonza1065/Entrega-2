import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { collection, getDocs, where, query } from "firebase/firestore";
import { baseDeDatos } from "../../service/fireBaseConfig";
const ItemListCointainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
    const collectionProd = collection(baseDeDatos, "productos");
    const ref = categoryName
      ? query(collectionProd, where("category", "==", categoryName))
      : collectionProd;
    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryName]);
  if (loading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader color="white" />
      </div>
    );
  }
  return (
    <main>
      <div className="item-list-container">
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default ItemListCointainer;
