import React from "react";
import "./Cart.css";
import { useShop } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  const { cartItems, removeFromCart, updateQuantity } = useShop();
  const navigate = useNavigate();

  // ➕ Increase quantity
  const increaseQty = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  // ➖ Decrease quantity
  const decreaseQty = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  // 🗑️ Remove item
  const removeItem = (id) => {
    removeFromCart(id);
  };

  // 🛒 Buy now (Single Item)
  const buyNow = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  // 🛒 Checkout (All Items)
  const checkoutAll = () => {
    navigate("/checkout", { state: { fromCart: true } });
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2 className="section-title">Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="col-product">Product</th>
            <th className="col-price">Price</th>
            <th className="col-quantity">Quantity</th>
            <th className="col-total">Total</th>
            <th className="col-actions"></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "40px" }}>
                Your cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id} className="cart-row">
                <td className="product-cell">
                  <div className="product-info">
                    <img
                      src={item.image || item.img}
                      alt={item.name}
                      className="product-img"
                    />
                    <span className="product-name">{item.name}</span>
                  </div>
                </td>

                <td className="price-cell">Rs {item.price}</td>

                <td className="quantity-cell">
                  <div className="quantity-stepper">
                    <button
                      className="step-btn"
                      onClick={() => decreaseQty(item.id, item.quantity)}
                    >
                      −
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="step-btn"
                      onClick={() => increaseQty(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="total-cell">
                  Rs {Number(item.price) * item.quantity}
                </td>

                <td className="actions-cell">
                  <button
                    className="buy-btn"
                    onClick={() => buyNow(item)}
                  >
                    Buy Now
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <span className="trash-icon">🗑️</span> Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>


    </div>
  );
};

export default CartTable;
