import React from 'react'
import {useParams} from "react-router-dom";
import {data} from "../api/data";
export default function IndividualProductPage({addToCart}) {
  const {productId} = useParams();
  let product = data.find(d=>d.id==Number(productId));
  return (
    <div>
      <h1>{product.id} : {product.name} - Page</h1>
      <img src="https://placehold.co/400"/>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
} 
