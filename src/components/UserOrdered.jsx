import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import BorderBarUi from './ui/BorderBarUi';
import Button from './ui/Button';

export default function UserOrdered() {
  const [orders, setOrders] = useState();
  const { user } = useAuthContext();

  useEffect(() => {
    const getOrderedFromUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/orders`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          setOrders(response.data.result);
        } else {
          alert('뭔가가 이상해');
        }
      } catch (error) {
        console.log('오류발생!');
      }
    };

    getOrderedFromUser();
  }, []);

  return (
    <div>
      {user && <h1 className="font-bold text-xl">나의 주문내역</h1>}
      <div className="my-3 ">
        {/* <span className="font-bold flex flex-col content-center text-2xl">{myStore.name} 가게 주문내역</span> */}
        <BorderBarUi></BorderBarUi>

        {orders &&
          orders.map((order) => {
            return (
              <div className="border-x-2 border-t-2 border-slate-300" key={order.id}>
                <h1 className="text-center">{order.id}번째 주문</h1>
                {order.OrderMenus &&
                  order.OrderMenus.map((menu) => {
                    return (
                      <div key={menu.id} className="border-t-2">
                        <div>
                          <h1>
                            {menu.Menu.menuName}
                            <span>{menu.count}개</span>
                          </h1>
                          <p>{menu.Menu.price}₩</p>
                        </div>
                      </div>
                    );
                  })}
                <div className="flex mx-auto w-fit">
                  {!order.delivered && (
                    <div>
                      <p>배송중</p>
                    </div>
                  )}
                  {order.delivered && <p>배송완료됐습니다.</p>}
                </div>
                <BorderBarUi></BorderBarUi>
              </div>
            );
          })}
        {(!orders || orders.length === 0) && <div>주문내역이 없습니다.</div>}
      </div>
    </div>
  );
}
