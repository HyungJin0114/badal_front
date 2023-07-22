import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StoreCard({ id, name, location, category, img }) {
  const navigate = useNavigate();
  const onClickStoreCard = () => {
    navigate(`/stores/${id}`);
  };
  return (
    <div>
      <div onClick={onClickStoreCard} className="py-8 px-8 mx-auto flex flex-row bg-white rounded-xl shadow-md transition delay-100 cursor-pointer hover:bg-pink-100 hover:shadow-xl">
        <img className="block mx-0 h-24 rounded-full" src={img} alt="Woman's Face" />
        <div className="text-center mx-4 my-auto">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{name}</p>
            <p className="text-slate-500 font-medium">{location}</p>
          </div>
          <div className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-pink-200">{category}</div>
        </div>
      </div>
    </div>
  );
}
