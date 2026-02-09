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
                            <div className="product-card">
                                <div className="product-image-container-premium">
                                    <Link to={`/product/${product.id}`} className="product-card-link-premium">
                                        <img src={product.img} alt={product.name} className="product-image-premium" />
                                    </Link>

                                    {/* Wishlist Overlay */}
                                    <button
                                        className="wishlist-btn-premium"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            addToWishlist(product);
                                        }}
                                        style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
                                    >
                                        <Heart
                                            size={18}
                                            fill={isInWishlist(product.id) ? "red" : "none"}
                                            color={isInWishlist(product.id) ? "red" : "currentColor"}
                                        />
                                    </button>

                                    {/* Badges */}
                                    <div className="card-badges">
                                        {product.skinType && <span className="badge-new">{product.skinType}</span>}
                                        {/* <span className="badge-new">New</span> */}
                                    </div>
                                </div>

                                <div className="product-details-premium">
                                    <Link to={`/product/${product.id}`} className="product-link-rest" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <h3 className="product-name-premium">{product.name}</h3>

                                        {/* Benefits/Description */}
                                        {product.benefits && <p className="product-desc-premium">{product.benefits}</p>}

                                        {/* Meta Tags (Finish etc) */}
                                        {/* {product.finish && <span className="meta-tag-premium">{product.finish}</span>} */}
                                    </Link>

                                    <div className="price-row-premium">
                                        <p className="product-price-premium">
                                            {/* <span className="price-label">Price</span>  */}
                                            {product.price}
                                        </p>
                                        <div className="stars-premium">
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                            <Star size={14} fill="#FFD700" color="#FFD700" />
                                        </div>
                                    </div>

                                    <button
                                        className="add-to-cart-btn-premium"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(product);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
