import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import BorderBarUi from "./ui/BorderBarUi";

export default function Ordered() {
  const [orders, setOrders] = useState();
  const { myStore, user } = useAuthContext();

  useEffect(() => {
    const getOrders = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${id}/orders`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data } = await response;
        console.log(data);
        setOrders(data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (user.isAdmin) {
      getOrders(myStore.id);
    }
  }, []);
  return (
    <div>
      <h1 className="my-3 text-center ">
        <span className="font-bold content-center text-2xl">{user.name}</span>님의 주문내역 보기
        {orders &&
          orders.map((order) => {
            return (
              <div key={order.id}>
                {order.OrderMenus &&
                  order.OrderMenus.map((menu) => {
                    return <div key={menu.id}>{menu.menuId}</div>;
                  })}
                <BorderBarUi></BorderBarUi>
              </div>
            );
          })}
        {!orders && <div>주문내역이 없습니다.</div>}
      </h1>
    </div>
  );
}
