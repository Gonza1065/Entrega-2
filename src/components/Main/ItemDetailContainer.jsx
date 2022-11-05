import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from "../../service/fireBaseConfig";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionProd = collection(baseDeDatos, "productos");
    const ref = doc(collectionProd, id);
    getDoc(ref)
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader color="white" />
      </div>
    );
  }
  return (
    <div className="item-list-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
