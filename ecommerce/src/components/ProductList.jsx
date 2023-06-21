import React , { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";
import { ProductCard } from "./ProductCard";

export function ProductList() {
    const [product, setProduct] = useState([]);
    const [filters, setFilters] = useState({
      productName: 'all',
      minPrice: 0,
      maxPrice: 10000,
    });
  
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: value,
        }));
      };

    const handleFilterSubmit = () => {
      return product.filter((product) => {
        return (
          product.productPrice >= filters.minPrice &&
          product.productPrice <= filters.maxPrice &&
          (filters.productName === 'all' || product.productName === filters.productName)
        );
      });
    };
  
    useEffect(() => {
      async function loadProducts() {
        const res = await getAllProducts();
        const filteredProducts = handleFilterSubmit(res.data); // Aplicar los filtros aquí
        setProduct(filteredProducts);
      }
      loadProducts();
    }, [filters]);


  return (
    <div>
      <h1>Product View</h1>
      <div>
        <input
          type="text"
          name="productName"
          placeholder="Filter by name"
          value={filters.productName}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min price"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <button onClick={handleFilterSubmit}>Apply Filters</button>
      </div>

      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}