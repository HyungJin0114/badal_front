import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import ReviewCard from "./ReviewCard";

export default function Review({ reviews, storeId, modalIsOpen, setModalIsOpen }) {
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
      {/* {!review && <div>리뷰가 아직 없습니다.</div>} */}
      <div className="flex flex-col">
        {reviews &&
          reviews.map((item) => {
            return <ReviewCard key={item.id} review={item} />;
          })}
      </div>
    </div>
  );
}
