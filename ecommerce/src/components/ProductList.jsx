import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";
import { ProductCard } from "./ProductCard";

export function ProductList(){

    const[product, setProduct] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const res = await getAllProducts();
            setProduct(res.data);
        }
        loadProducts();
    }, []);

    return <div>{product.map(product => (
        <ProductCard key={product.id} product={product}/>
    ))}</div>

}