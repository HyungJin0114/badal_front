import React, { useState } from "react";
import Button from "./ui/Button";
import { useCart } from "../context/CartContext";
import Modal from "react-modal";
import NewMenu from "../components/NewMenu";
import axios from "axios";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "80%",
    maxWidth: "450px",
    position: "absolute",
    height: "500px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
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

export default function MenuCard({ menu, admin, storeId }) {
  const { addToCart } = useCart();
  const [menuModalIsOpen, setMenuModalIsOpen] = useState(false);

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
  // 메뉴 수정버튼
  const onClickUpdateMenuBtn = async () => {
    setMenuModalIsOpen(true);
  };

  // 메뉴 삭제버튼
  const onClickDelMenuBtn = async () => {
    try {
      axios.delete(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${storeId}/menus/${menu.id}`,{ withCredentials: true,})
        .then(function (response) {
          // handle success
          console.log(response);
          alert("메뉴가 삭제되었습니다.");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          alert("삭제오류")
        })

      window.location.reload();

      // 성공적으로 업로드 후 처리할 로직을 작성하세요.
    } catch (error) {
      alert("메뉴 삭제에 실패했습니다.");

      console.error(error);
    }
  };
  return (
    <div>
      <div className="py-8 px-2 sm:px-8 mx-auto flex flex-row bg-white ">
        <img className="block mx-0 w-[120px] h-[80px] rounded-xl" src={`${menu.image}`} alt="menu" />
        <div className="text-center mx-4 my-auto">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{menu.menuName}</p>
            <p className="text-slate-500 font-medium">{menu.price}원</p>
          </div>

          <Button text={"주문하기"} onClick={handleAddCart} />
        </div>
      </div>
      {admin && <Button text={"수정하기"} onClick={onClickUpdateMenuBtn} />}
      {admin && <Button text={"삭제하기"} onClick={onClickDelMenuBtn} />}
      <div className="w-[80%] mx-auto border-b-2"></div>
      <Modal isOpen={menuModalIsOpen} onRequestClose={() => setMenuModalIsOpen(false)} style={customStyles}>
        <style>{slideUpAnimation}</style>
        <NewMenu requestType={"PUT"} menuId = {menu.id} />
      </Modal>
    </div>
  );
}
