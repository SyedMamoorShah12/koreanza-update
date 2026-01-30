import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';

import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import './CategoryPage.css';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { addToCart, addToWishlist, isInWishlist } = useShop();

    // Filter products by category (case insensitive), or show all if "all"
    const categoryProducts = categoryName?.toLowerCase() === 'all'
        ? products
        : products.filter((product) => product.category.toLowerCase() === categoryName?.toLowerCase());

    return (
        <div className="category-page">
            <h1 className="page-title">
                {categoryName?.toLowerCase() === 'all' ? 'All Products' : `${categoryName} Collection`}
            </h1>

            {categoryProducts.length === 0 ? (
                <p className="no-products">No products found in this category.</p>
            ) : (
                <div className="products-grid">
                    {categoryProducts.map((product) => (
                        <div key={product.id} className="product-card-wrapper">
                            <Link to={`/product/${product.id}`} className="product-card-link">
                                <div className="product-card">
                                    <div className="product-image-container">
                                        <img src={product.img} alt={product.name} />
                                    </div>
                                    <div className="product-actions">
                                        <button
                                            className="icon-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToWishlist(product);
                                            }}
                                        >
                                            <Heart
                                                size={20}
                                                fill={isInWishlist(product.id) ? "red" : "none"}
                                                color={isInWishlist(product.id) ? "red" : "#333"}
                                            />
                                        </button>
                                        <button
                                            className="icon-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart(product);
                                            }}
                                        >
                                            <ShoppingCart size={20} />
                                        </button>
                                    </div>
                                    <div className="product-info2">
                                        <h3 className="product-name">{product.name}</h3>
                                        {product.benefits && <p className="product-benefits">{product.benefits}</p>}
                                        <div className="product-meta">
                                            {product.skinType && <span className="meta-tag">{product.skinType}</span>}
                                            {product.finish && <span className="meta-tag">{product.finish}</span>}
                                        </div>
                                        <p className="product-price">
                                            <span className="price-label">Price</span> {product.price}
                                        </p>
                                        <div className="product-rating">
                                            <Star size={16} fill="#FFD700" color="#FFD700" />
                                            <Star size={16} fill="#FFD700" color="#FFD700" />
                                            <Star size={16} fill="#FFD700" color="#FFD700" />
                                            <Star size={16} fill="#FFD700" color="#FFD700" />
                                            <Star size={16} fill="#FFD700" color="#FFD700" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
