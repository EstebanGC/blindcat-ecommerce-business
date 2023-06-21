import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <>
      
        <Link to="/products-create">
          <button>Botón</button>
        </Link>
      
      <div>
        <h3>Product: {product.productName}</h3>
      </div>
      <div>
        <p>Description: {product.description}</p>
        <p>Price: {product.productPrice}</p>
        <p>Quantity: {product.producQuantity}</p>
        <p>Stock: {product.stock}</p>
        <p>Minimum units: {product.minProduct}</p>
        <hr />
      </div>
    </>
  );
}