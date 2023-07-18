import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import Button from "./ui/Button";

export default function CartCard({ menu }) {
  return (
    <div>
      <div class="py-8 mx-auto flex justify-between items-center bg-white ">
        <div class="flex flex-row">
          <div class="flex flex-col gap-6">
            <p class="text-lg text-black font-semibold">{menu.menuName}</p>
            <p class="text-slate-500 font-medium">{menu.price}원</p>
          </div>
        </div>
        <div className="items-center text-center">
          <RiCloseFill className="text-3xl ms-11 cursor-pointer hover:text-red-500 " />
          <div className="flex flex-row items-center mt-4 gap-3 text-xl">
            <TiMinus />
            <p className="">{menu.count}</p>
            <TiPlus />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto border-b-2"></div>
    </div>
  );
}
