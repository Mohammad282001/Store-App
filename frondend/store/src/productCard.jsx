import React from 'react';
import './ProductCard.css';


const ProductCard = ({ someProduct }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={someProduct.image} alt={someProduct.title} className="product-image" />
                <div className="product-rating">{someProduct.rating.rate} ★</div>
            </div>
            <div className="product-info">
                <h3 className="product-title">{someProduct.title}</h3>
                <p className="product-description">{someProduct.description}</p>
                <div className="product-footer">
                    <span className="product-price">${someProduct.price.toFixed(2)}</span>
                    <button className="add-to-cart-btn">
                        <span className="cart-icon">🛒</span>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
