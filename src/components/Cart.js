import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ textAlign: "center", margin: "16px", padding: "16px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Cart</h1>
      <div style={{ width: "50%", margin: "auto" }}>
        <button
          onClick={handleClearCart}
          style={{
            padding: "8px",
            margin: "8px",
            background: "black",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h3>Your Cart is empty. Add items to the cart!</h3>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
