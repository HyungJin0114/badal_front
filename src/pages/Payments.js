import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';
import axios from 'axios';

export default function Payments() {
  const { cartItems, cartStoreId, getTotalPrice } = useCart();
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

  useEffect(() => {
    setTotalPrice(getTotalPrice);
  }, [cartItems]);

  const onClickPaymentsBtn = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_SERVERURL}/api/stores/${cartStoreId}/orders`,
        { orderList: cartItems },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status) {
        alert('주문이 완료됐습니다!');
        window.location.reload();
      } else if (response.status) {
        alert('잔액부족!');
        window.location.reload();
      } else {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {}
    // removeMyCart();
  };
  return (
    <div>
      <Cart />{' '}
      {totalPrice !== 0 && (
        <button onClick={onClickPaymentsBtn} className="flex w-fit text-xl text-center mx-auto py-1 px-2 rounded-xl font-bold text-white bg-pink-300 hover:bg-pink-500">
          {totalPrice + '원 주문하기'}
        </button>
      )}
    </div>
  );
}
