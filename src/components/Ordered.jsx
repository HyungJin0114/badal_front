import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import BorderBarUi from './ui/BorderBarUi';
import Button from './ui/Button';

export default function Ordered() {
  const [orders, setOrders] = useState();
  const { myStore, user } = useAuthContext();

  const onClickPatchDeliverBtn = async (orderId) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}/orders/${orderId}`,
        { delivered: true },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        alert('배송완료 완료!');
        window.location.reload();
      } else {
        alert('뭔가가 이상해');
      }
    } catch (error) {
      console.log('오류발생!');
    }
  };

  const onClickDeleteBtn = (orderId) => {
    axios
      .delete(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}/orders/${orderId}`, {
        withCredentials: true,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        alert('주문이 취소되었습니다.');
        window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert('주문 취소 오류');
      });
  };

  useEffect(() => {
    const getOwnerOrdered = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${id}/orders`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
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
      getOwnerOrdered(myStore.id);
    } else {
    }
  }, []);

  return (
    <div>
      {user.isAdmin && <h1 className="font-bold text-xl">사장님 주문내역</h1>}
      <div className="my-3 ">
        <span className="font-bold flex flex-col content-center text-2xl">{myStore.name} 가게 주문내역</span>
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
                      <Button
                        className="mx-auto w-fit"
                        text={'배송완료하기'}
                        onClick={() => onClickPatchDeliverBtn(order.id)}
                      />
                      <Button className="mx-auto w-fit" text={'주문취소'} onClick={() => onClickDeleteBtn(order.id)} />
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
