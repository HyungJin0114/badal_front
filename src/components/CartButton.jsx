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
    height: "500px",
    "max-height": "800px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export default function CartButton() {
  const { getTotalCount, cartItems } = useCart();
  const [totalPrice, setTotalPrice] = useState(getTotalCount());
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total, item) => total + item.count, 0));
  }, [cartItems]);
  return (
    <div>
      <BsCartFill
        className="text-3xl hover:bg-red-300"
        onClick={() => {
          setModalIsOpen(true);
        }}
      />
      <div>
        <span>{totalPrice}</span>
      </div>
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <Cart />
      </ReactModal>
    </div>
  );
}
