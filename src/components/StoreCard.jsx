import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StoreCard({ id, name, location, category, image }) {
  const navigate = useNavigate();
  const onClickStoreCard = () => {
    navigate(`/stores/${id}`);
  };
  return (
    <div>
      <div
        onClick={onClickStoreCard}
        className="py-8 px-8 mx-auto max-h-40 flex flex-row bg-white rounded-xl shadow-md transition delay-100 cursor-pointer hover:bg-pink-100 hover:shadow-xl"
      >
        {/* <img className="rounded-t-xl mx-0 w-full max-h-40" src={storeInfo.image} alt="" /> */}
        <img className="block mx-0 w-28 rounded-full" src={image} alt="Woman's Face" />
        <div className=" mx-4 w-fit my-auto">
          <div className="space-y-0.5">
            <p className="text-lg whitespace-nowrap text-black font-semibold">{name}</p>
            <p className="text-slate-500 font-medium">{location}</p>
          </div>
          <div className="px-4 w-fit py-1 text-sm text-pink-500 font-semibold rounded-full border border-pink-200">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
}
