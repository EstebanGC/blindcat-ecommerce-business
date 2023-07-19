import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";
import { ProductCard } from "./ProductCard";
import { Cart } from "./Cart";

export function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    productName: "all",
    minPrice: 0,
    maxPrice: 10000,
  }); 
  const [cartItems, setCartItems] = useState([]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = () => {
    const filteredProducts = allProducts.filter((product) => {
      return (
        product.productPrice >= filters.minPrice &&
        product.productPrice <= filters.maxPrice &&
        (filters.productName === "all" || product.productName === filters.productName)
      );
    });
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getAllProducts();
      const productsData = res.data;
      setAllProducts(productsData);
      setFilteredProducts(productsData);
    }
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }
  console.log('cartItems: ', cartItems)

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
        <Cart cartItems={cartItems}></Cart>
      </div>

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
      
    </div>
  );
}