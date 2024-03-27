import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../api/data';
import { useOutletContext } from 'react-router-dom';

export default function IndividualProductPage() {
  const { productId } = useParams();
  const { addToCart } = useOutletContext();
  const product = data.find((item) => item.id === Number(productId));

  if (!product) {
    return <div className="container mx-auto">Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src={`https://placehold.co/400x200?text=Product`}
            alt={product.name}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-bold mr-2">Price:</span>
            <span className="text-xl">{product.price}</span>
          </div>
          {product.color && (
            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold mr-2">Color:</span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: product.color }}
              ></div>
            </div>
          )}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

