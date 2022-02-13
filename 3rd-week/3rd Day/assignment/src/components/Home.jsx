import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
  };

//   console.log(product);

  return (
    <div>
      Total products is 4 categories :{" "}
      {product.map((el, idx) => {
        return <div key={idx}> <Link to={`/${el}`} > {el}</Link> </div>;
      })}
    </div>
  );
};
