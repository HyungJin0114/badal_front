import React from 'react';
import BorderBarUi from './ui/BorderBarUi';
import { AiFillStar } from 'react-icons/ai';

export default function ReviewCard({ review }) {
  return (
    <div className="">
      <BorderBarUi />
      <h1 className="text-xl font-semi-bold">{review.nickname}</h1>
      <p className="flex flex-row items-center text-lg bg-pink-300 rounded-lg w-fit px-2">
        <AiFillStar className="text-yellow-300" />
        <span className="text-white">{review.rating}.0</span>
      </p>
      <p className="ps-5">{review.content}</p>
    </div>
  );
}
