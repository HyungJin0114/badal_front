import axios from 'axios';
import React, { useState } from 'react';
import Button from '../ui/Button';

export default function CreateReview({ orderId, reviewId, newStoreId, requestType }) {
  const [content, setContent] = useState();
  const [rating, setRating] = useState();

  const onClickDelBtn = async (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (requestType === 'POST') {
        // 등록 시
        const response = await axios.post(
          `${process.env.REACT_APP_API_SERVERURL}/api/stores/${newStoreId}/reviews`,
          { content, rating, orderId },
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          alert('작성 완료!');
          window.location.reload();
        } else {
          alert('뭔가가 이상해');
        }
      } else {
        // 수정 시
        const response = await axios.patch(
          `${process.env.REACT_APP_API_SERVERURL}/api/stores/${newStoreId}/reviews/${reviewId}`,
          {
            content,
            rating,
          },
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          alert('작성 완료!');
          window.location.reload();
        } else {
          alert('뭔가가 이상해');
        }
      }
    } catch (error) {
      alert('뭔가 에러');
      // window.location.reload();
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold mb-10">
        {requestType === 'POST' ? '리뷰 등록하기' : '리뷰 수정하기'}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="별점" value={rating} required onChange={(e) => setRating(e.target.value)} />
        {/* <div className="flex items-center space-x-3">
          <svg className={`w-8 h-8 ${rating === 1 ? 'text-yellow-300' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className={`w-8 h-8 ${rating === 2 ? 'text-yellow-300' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className={`w-8 h-8 ${rating === 3 ? 'text-yellow-300' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className={`w-8 h-8 ${rating === 4 ? 'text-yellow-300' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className={`w-8 h-8 ${rating === 4 ? 'text-yellow-300' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div> */}
        <input type="text" placeholder="리뷰" value={content} required onChange={(e) => setContent(e.target.value)} />

        <button
          className="w-[80%] mx-auto bg-pink-300 py-1.5 rounded-2xl font-bold text-white hover:bg-pink-500"
          type="submit"
        >
          {requestType === 'PUT' ? '리뷰 변경' : '리뷰 등록'}
        </button>
      </form>
      {requestType === 'PUT' && <Button onClick={onClickDelBtn} text={'리뷰 삭제'} />}
    </div>
  );
}
