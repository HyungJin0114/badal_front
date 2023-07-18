// cartContext.js

import React, { useState, useContext } from "react";

// 초기 장바구니 상태
const initialCartItems = [];

// 장바구니 관련 컨텍스트 생성
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartStoreId, setCartStoreId] = useState();

  const addToCart = async (newItem, storeId) => {
    if (!cartStoreId) {
      setCartStoreId(storeId);
    } else if (storeId !== cartStoreId) {
      alert("같은 가게의 메뉴만 카트에 담을 수 있습니다. 이전 카트를 초기화 합니다.");
      await setCartItems([newItem]);
      await setCartStoreId(storeId);

      return;
    }

    // 중복된 menuId를 가진 메뉴가 이미 장바구니에 있는지 체크
    const existingItemIndex = cartItems.findIndex((item) => item.menuId === newItem.menuId);

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 있는 경우 count만 업데이트
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].count += newItem.count;
      setCartItems(updatedCart);
    } else {
      // 장바구니에 없는 경우 새로 추가
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // 장바구니 내 메뉴 개수를 총합 계산하는 함수
  const getTotalCount = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  // 장바구니 내 메뉴 가격의 총합 계산하는 함수
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCount,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
