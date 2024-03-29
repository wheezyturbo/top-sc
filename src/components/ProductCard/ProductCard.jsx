import {Link} from "react-router-dom";

export default function ProductCard({ product }) {
  const link = 1;
  return (
    <Link to={`/products/${product.id}`}>
    <div className="card max-w-96 bg-base-100 shadow-xl hover:shadow-2xl ease-out duration-300">
      <figure>
        <img src={`https://via.placeholder.com/400x200`} className="object-contain" alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price: ${product.price}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};
