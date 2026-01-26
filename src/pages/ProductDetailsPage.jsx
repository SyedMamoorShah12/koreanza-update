import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Heart, Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { addToCart, addToWishlist, isInWishlist } = useShop();

    const product = products.find(p => p.id === parseInt(productId));

    // Get 3 random products for Perfect Pairings (excluding current)
    const perfectPairings = products
        .filter(p => p.id !== parseInt(productId))
        .slice(0, 4);

    if (!product) {
        return <div className="product-not-found">Product not found. <button onClick={() => navigate('/')}>Go Home</button></div>;
    }

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'increase') {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="product-details-container">
            {/* Main Product Section */}
            <div className="product-main-content">
                {/* Image Section */}
                <div className="product-image-container">
                    <button
                        className={`wishlist-btn-large ${isInWishlist(product.id) ? 'active' : ''}`}
                        onClick={() => addToWishlist(product)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', position: 'absolute', right: '10px', top: '10px', zIndex: 10 }}
                    >
                        <Heart
                            size={24}
                            fill={isInWishlist(product.id) ? "red" : "none"}
                            color={isInWishlist(product.id) ? "red" : "#333"}
                        />
                    </button>
                    <img src={product.img} alt={product.name} className="main-product-image" />
                </div>

                {/* Info Section */}
                <div className="product-info-container">
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price-row">
                        <span className="price-label">Price</span>
                        <span className="price-value">{product.price}</span>
                    </div>

                    <div className="product-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={20} fill="#FDC040" color="#FDC040" />
                        ))}
                    </div>

                    <div className="product-quantity-section">
                        <span className="quantity-label">Quantity:</span>
                        <div className="quantity-selector">
                            <button onClick={() => handleQuantityChange('decrease')}><Minus size={16} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange('increase')}><Plus size={16} /></button>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button
                            className="buy-now-btn"
                            onClick={() => navigate("/checkout", { state: { product: { ...product, quantity } } })}
                        >
                            Buy Now
                        </button>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart({ ...product, quantity })}
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="product-description-section">
                        <h3>Details :</h3>
                        <p>{product.description}</p>
                        <p className="lorem-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
            </div>

            {/* Perfect Pairings Section */}
            <div className="perfect-pairings-section">
                <h2 className="section-title">Perfect Pairings</h2>

                <div className="pairings-grid">
                    {perfectPairings.map((item) => (
                        <div key={item.id} className="pairing-card" onClick={() => navigate(`/product/${item.id}`)}>
                            <div className="pairing-image-wrapper">
                                <img src={item.img} alt={item.name} />
                                <div className="pairing-actions">
                                    <button
                                        className="icon-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToWishlist(item);
                                        }}
                                    >
                                        <Heart
                                            size={18}
                                            fill={isInWishlist(item.id) ? "red" : "none"}
                                            color={isInWishlist(item.id) ? "red" : "#333"}
                                        />
                                    </button>
                                    <button
                                        className="icon-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(item);
                                        }}
                                    >
                                        <ShoppingCart size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="pairing-info">
                                <h3>{item.name}</h3>
                                <div className="pairing-price-row">
                                    <span className="price-label">Price</span>
                                    <span className="price-value">{item.price}</span>
                                </div>
                                <div className="pairing-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill="#FDC040" color="#FDC040" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
