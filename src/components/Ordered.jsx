import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Ordered({ user, isAdmin }) {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${id}/orders`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        const data = await response.json();
      } catch (error) {
        console.log(error.message);
      }
    };
    if (isAdmin) {
      getOrders(5);
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
