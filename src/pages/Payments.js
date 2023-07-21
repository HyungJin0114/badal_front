import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import axios from "axios";

export default function Payments() {
  const { cartItems, cartStoreId, removeMyCart, addToCart, decreaseCount, increaseCount, removeFromCart, getTotalCount, getTotalPrice } = useCart();
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

  useEffect(() => {
    setTotalPrice(getTotalPrice);
  }, [cartItems]);

  const onClickPaymentsBtn = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_SERVERURL}/api/stores/${cartStoreId}/orders`,
        { orderList: cartItems },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        alert(data.message);
      } else {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {}
    // removeMyCart();
  };
  return (
    <div>
      <Cart />{" "}
      {totalPrice !== 0 && (
        <button onClick={onClickPaymentsBtn} className="flex w-fit text-xl text-center mx-auto py-1 px-2 rounded-xl font-bold text-white bg-pink-300 hover:bg-pink-500">
          {totalPrice + "원 주문하기"}
        </button>
      )}
    </div>
  );
}
