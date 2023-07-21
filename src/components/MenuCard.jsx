import React from "react";
import Button from "./ui/Button";
import { useCart } from "../context/CartContext";

export default function MenuCard({ menu, storeId }) {
  const { addToCart } = useCart();
  const handleAddCart = () => {
    const newItem = {
      menuId: menu.id,
      menuName: menu.menuName,
      price: menu.price,
      count: 1,
    };
    //   navigate(`/stores/${}`);
    addToCart(newItem, storeId);
  };
  return (
    <div>
      <div className="py-8 px-2 sm:px-8 mx-auto flex flex-row bg-white ">
        <img className="block mx-0 w-[120px] rounded-xl" src={menu.image} alt="Woman's Face" />
        <div className="text-center mx-4 my-auto">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{menu.menuName}</p>
            <p className="text-slate-500 font-medium">{menu.price}원</p>
          </div>

          <Button text={"주문하기"} onClick={handleAddCart} />
        </div>
      </div>
      <div className="w-[80%] mx-auto border-b-2"></div>
    </div>
  );
}
