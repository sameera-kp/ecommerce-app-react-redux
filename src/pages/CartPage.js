import React from "react";
import { useCart } from "../context/cartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  if (cartItems.length === 0) return <div className="container mt-5 text-center"><h3>Your Cart is Empty</h3></div>;

  return (
    <div className="container mt-4">
      <h2>My Cart ({totalItems} items)</h2>
      <div className="row">
        <div className="col-lg-8">
          {cartItems.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 p-2">
                  <img src={item.image} alt={item.title} className="img-fluid" style={{height:150, objectFit:"contain"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column h-100">
                    <h6>{item.title}</h6>
                    <p className="text-primary fw-bold">$ {item.price}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div className="input-group input-group-sm w-50">
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <input className="form-control text-center" readOnly value={item.quantity} />
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card p-3 shadow-sm">
            <h5>Order Summary</h5>
            <p>Total Items: {totalItems}</p>
            <h4 className="text-primary">$ {totalPrice.toFixed(2)}</h4>
            <button className="btn btn-success w-100">Checkout</button>
            <button className="btn btn-outline-danger w-100 mt-2" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
