import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function Payments() {
  const { cartItems, addToCart, decreaseCount, increaseCount, removeFromCart, getTotalCount, getTotalPrice } = useCart();

  return <Cart />;
}
