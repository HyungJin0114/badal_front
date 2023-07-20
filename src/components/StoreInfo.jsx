import React, { useState } from "react";
import Button from "./ui/Button";
import Modal from "react-modal";
import NewStore from "./NewStore";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "80%",
    "max-width": "450px",
    position: "absolute",
    height: "450px",
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

// const result = {
//   id: 1,
//   name: "가게명",
//   location: "지역명1",
//   category: "한식",
//   img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
// };
const result = null;

export default function StoreInfo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!result) {
    return (
      <div className="mx-auto w-fit my-3">
        <Button onClick={() => setModalIsOpen(true)} text={"가게 생성하기"}></Button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
          <style>{slideUpAnimation}</style>
          <div className="">
            <NewStore />
          </div>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-row  items-center text-lg justify-between">
        <div className="flex flex-col">
          <p className="font-bold">가게명</p> <span className="ms-10">{result.name}</span>
        </div>
        <Button text={"변경"}></Button>
      </div>
      <div className="flex flex-row  items-center text-lg justify-between">
        <div className="flex flex-col">
          <p className="font-bold">지역명</p> <span className="ms-10">{result.location}</span>
        </div>
        <Button text={"변경"}></Button>
      </div>
      <div className="flex flex-row  items-center text-lg justify-between">
        <div className="flex flex-col">
          <p className="font-bold">카테고리</p> <span className="ms-10">{result.category}</span>
        </div>
        <Button text={"변경"}></Button>
      </div>
      <div className="flex flex-row  items-center text-lg justify-between">
        <div className="flex flex-col">
          <p className="font-bold">이미지</p> <span className="ms-10">{result.name}</span>
          {/* <image src={} /> */}
        </div>
        <Button text={"변경"}></Button>
      </div>
    </div>
  );
}
