import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CartProvider } from "./context/cartContext";
import App from "./App";
import "./styles/App.css"; // global styles

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </Provider>
);
