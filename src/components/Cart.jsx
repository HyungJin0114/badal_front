import React from "react";
import { useCart } from "../context/CartContext";
import MenuCard from "./MenuCard";
import CartCard from "./CartCard";
import Button from "./ui/Button";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, getTotalCount, getTotalPrice } = useCart();
  return (
    <div>
      <div className="mb-4">
        {cartItems.map((item) => {
          return (
            <>
              <CartCard menu={item} />
            </>
          );
        })}
      </div>
      <div className="mx-auto w-fit text-xl">
        <Button text={"주문하기"} />
      </div>
    </div>
  );
}
