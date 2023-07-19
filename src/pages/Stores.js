import React from "react";
import { useParams } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import CartButton from "../components/CartButton";

const result = {
  name: "가게명",
  location: "지역명1",
  storePhoneNumber: "전화번호",
  category: "한식",
  img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
};

const menues = [
  {
    menuId: 1,
    menuName: "닭다리",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 2,
    menuName: "닭다리2",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 3,
    menuName: "닭다리3",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 4,
    menuName: "닭다리4",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 5,
    menuName: "닭다리5",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 6,
    menuName: "닭다리6",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 7,
    menuName: "닭다리7",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
  {
    menuId: 8,
    menuName: "닭다리8",
    price: "20000",
    image: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689607054/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-18_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.26_cxted3.png",
  },
];

export default function Stores() {
  const { storeId } = useParams();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4  border-b-2 pb-4">
        <img className="rounded-t-xl mx-0 w-full max-h-40" src={result.img} alt="" />
        <h1 className="text-2xl font-bold mx-3">{result.name}</h1>
        <p className="font-semibold w-fit mx-3 cursor-pointer transition hover:translate-x-2">
          ⭐ 4.2 <span className="text-slate-500 ">{"리뷰 >"}</span>
        </p>
      </div>
      <div className="p-4 text-slate-500 border-b-2">
        <h1 className="font-semibold ">배달정보</h1>
        <div className="px-2">
          <p>지역명: {result.location}</p>
          <p>카테고리: {result.category}</p>
          <p>전화번호: {result.storePhoneNumber}</p>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-xl font-bold mx-3">{result.name}의 메뉴</h1>
        <div className="flex flex-col gap-3">
          {menues.map((menu) => {
            return <MenuCard menu={menu} storeId={storeId} />;
          })}
        </div>
      </div>
      <div className="fixed bottom-10 right-10 ">
        <CartButton />
      </div>
    </div>
  );
}