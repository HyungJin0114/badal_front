import React from "react";
import { useNavigate } from "react-router-dom";

export default function StoreCard({ id, name, location, category, img }) {
  const navigate = useNavigate();
  const onClickStoreCard = () => {
    navigate(`/stores/${id}`);
  };
  return (
    <div>
      <div onClick={onClickStoreCard} class="py-8 px-8 mx-auto flex flex-row bg-white rounded-xl shadow-md transition delay-100 cursor-pointer hover:bg-pink-100 hover:shadow-xl">
        <img class="block mx-0 h-24 rounded-full" src={img} alt="Woman's Face" />
        <div class="text-center mx-4 my-auto">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{name}</p>
            <p class="text-slate-500 font-medium">{location}</p>
          </div>
          <div class="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-pink-200">{category}</div>
        </div>
      </div>
    </div>
  );
}
