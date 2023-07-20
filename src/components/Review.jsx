import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import ReviewCard from "./ReviewCard";

const result = [
  {
    nickname: "닉네임1",
    content: "악플 달지마1",
    rating: "1",
  },
  {
    nickname: "닉네임2",
    content: "악플 달지마2",
    rating: "4",
  },
  {
    nickname: "닉네임3",
    content: "악플 달지마3",
    rating: "4",
  },
  {
    nickname: "닉네임4",
    content: "악플 달지마4",
    rating: "2",
  },
];

export default function Review({ storeId, modalIsOpen, setModalIsOpen }) {
  const goBack = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around">
        <button onClick={goBack} className="text-3xl text-center w-fit rounded-xl font-bold text-pink-300 hover:text-pink-500">
          <MdArrowBackIos />
        </button>
        <h1 className="font-bold text-xl w-fit">{"리뷰"}</h1>
        <h1 className="font-bold text-xl w-fit text-white">{"리뷰"}</h1>
      </div>
      <div className="flex flex-col">
        {result.map((item) => {
          return <ReviewCard review={item} key={item.content} />;
        })}
      </div>
    </div>
  );
}
