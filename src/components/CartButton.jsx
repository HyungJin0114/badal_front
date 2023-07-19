import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import ReactModal from "react-modal";
import Cart from "./Cart";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "80%",
    "max-width": "450px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "1rem",
    "padding-left": "2rem",
    "padding-right": "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    animation: "slide-up 0.5s", // 애니메이션 적용
  },
};

// 슬라이드 업 애니메이션을 위한 CSS 키 프레임 정의
const slideUpAnimation = `
    @keyframes slide-up {
      from {
        transform: translate(-50%, 100%);
      }
      to {
        transform: translateY(-50%, 0);
      }
    }
  `;

export default function CartButton() {
  const { getTotalCount, cartItems } = useCart();
  const [totalPrice, setTotalPrice] = useState(getTotalCount());
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total, item) => total + item.count, 0));
  }, [cartItems]);
  return (
    <div className="">
      <div
        onClick={() => {
          setModalIsOpen(true);
        }}
        className="text-red-300 cursor-pointer p-1 text-4xl hover:scale-110 ">
        <BsCartFill />
        <div className="absolute bg-black px-2 rounded-full text-xl left-4 bottom-4 text-white">
          <span>{totalPrice}</span>
        </div>
      </div>
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <style>{slideUpAnimation}</style>
        <Cart />
      </ReactModal>
    </div>
  );
}
