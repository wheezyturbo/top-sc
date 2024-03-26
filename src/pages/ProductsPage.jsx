import React,{useState,useEffect} from 'react';
import {data} from "../api/data";
import ProductCard from "../components/ProductCard/ProductCard";
export default function ProductsPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 mx-auto">
      <ul className="menu bg-base-200 w-56 rounded-box sticky top-20 mt-20 mx-auto lg:block sm:hidden">
        <li>
          <h2 className="menu-title">Filter</h2>
          <ul>
            <li><a>Category 1</a></li>
            <li><a>Category 2</a></li>
            <li><a>Category 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
        <div className="divider divider-horizontal">Products</div>
      <div className="flex-2">
            <div className=" mx-auto column-3 flex flex-wrap container gap-5 justify-evenly mt-5 w-full">
        {data.map(d=>
          <ProductCard product={d} key={d.id}/>
        )}
      </div>
    </div>
    </div>
  )
}
