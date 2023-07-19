import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import MenuCard from "./MenuCard";
import CartCard from "./CartCard";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, decreaseCount, increaseCount, removeFromCart, getTotalCount, getTotalPrice } = useCart();
  const [totalPrice, setTotalPrice] = useState(getTotalPrice);
  useEffect(() => {
    setTotalPrice(getTotalPrice);
  }, [cartItems]);

  // 이전 페이지로 이동하는 함수

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-2xl text-center mx-auto my-5">
          아직 카트에
          <br /> 음식이 없어요!
        </h1>
        {/* <button onClick={goBack} className="text-xl text-center mx-auto py-1 px-2 rounded-xl font-bold text-white bg-pink-300 hover:bg-pink-500">
          주문 하는 곳으로
        </button> */}
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        {cartItems.map((item) => {
          return (
            <>
              <CartCard menu={item} decreaseCount={decreaseCount} increaseCount={increaseCount} removeFromCart={removeFromCart} />
            </>
          );
        })}
      </div>
      <Link to="/payments" className="text-xl text-center mx-auto py-1 px-2 rounded-xl font-bold text-white bg-pink-300 hover:bg-pink-500">
        {totalPrice + "원 주문하기"}
      </Link>
    </div>
  );
}
