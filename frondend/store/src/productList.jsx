import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './productCard';
import './ProductCard.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8888/api');
                console.log('Full response:', response); // Log the full response
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log('Products state:', products); // Log the products state

    if (products.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} someProduct={product} />
            ))}
        </div>
    );
};

export default ProductList;
