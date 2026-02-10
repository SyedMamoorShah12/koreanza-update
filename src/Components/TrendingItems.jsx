import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import "./TrendingItems.css";
import { useShop } from "../context/ShopContext";
import { products } from "../data/products";
import PriceWithDiscount from "./PriceWithDiscount";

/* FIRST ROW */
const trendingIds = [9, 7, 24, 12];
const trendingProducts = trendingIds.map(id => products.find(p => p.id === id)).filter(Boolean);

/* SECOND ROW */
const topBeautyIds = [30, 23, 8, 5];
const topBeautyProducts = topBeautyIds.map(id => products.find(p => p.id === id)).filter(Boolean);

const ProductGrid = ({ products }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container-premium">
            <Link to={`/product/${product.id}`} className="product-card-link-premium">
              <img src={product.img || product.image} alt={product.name} className="product-image-premium" />
            </Link>

            {/* Wishlist Overlay */}
            <button
              className="wishlist-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
            >
              <Heart size={20} fill={isInWishlist(product.id) ? "red" : "none"} />
            </button>

            {/* New Badge (optional/simulated for now) */}
            <span className="badge-new">New</span>
          </div>

          <div className="product-details-premium">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="product-name-premium">{product.name}</h3>
              <p className="product-desc-premium">Hydrating & Glowing</p> {/* Static for now as description isn't in this prop, using placeholder or could be passed */}
            </Link>

            <div className="price-row-premium">
              <PriceWithDiscount
                price={product.price}
                originalPrice={product.originalPrice}
                size="small"
              />
              <div className="stars-premium">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <button
              className="add-to-cart-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const TrendingItems = () => {
  return (
    <section className="trending-container">
      {/* ROW 1 */}
      <h2 className="section-title heading-line">Trending Items</h2>
      <ProductGrid products={trendingProducts} />

      {/* ROW 2 */}
      <h2 className="section-title second heading-line">Top Beauty Products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default TrendingItems;
