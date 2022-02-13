import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./product.css"

export const Products = () => {
  const [data, setData] = useState([]);

  const { category } = useParams();

  useEffect(()=>{
    getData();
  },[])

  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  };

  console.log(data);

  return (
    <div id="box">
      {data.map((el, idx) => {
        return (
          <div key={idx}>
            <div>
              <img src={el.image} alt="" />
              <p>{el.title}</p>
              <p>
                <b>{el.price}</b>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
