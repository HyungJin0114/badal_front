import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Ordered({ user, isAdmin }) {
  const [review, setReview] = useState();

  useEffect(() => {
    const getReview = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${id}/orders`);
        console.log(response.json());
      } catch (error) {}
    };
    if (isAdmin) {
      getReview(4);
    }
  });
  return (
    <div>
      <h1 className="my-3 text-center content-center text-2xl">
        <span className="font-bold">{user.name}</span>님의 주문내역 보기
      </h1>
    </div>
  );
}
