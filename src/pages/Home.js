import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import StoreCard from "../components/StoreCard";

const datas = [
  {
    id: 1,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 2,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 3,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 4,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 5,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 6,

    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 7,

    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
  {
    id: 8,
    name: "가게명",
    location: "지역명1",
    category: "한식",
    img: "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1689592865/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.20.58_ophrmz.png",
  },
];

export default function Home() {
  const [result, setResult] = useState();

  useEffect(() => {
    const response = [];

    setResult();
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <input className="w-[80%] border rounded-md p-2 border-slate-200 h-8" placeholder="검색창"></input>
      </div>
      <Category />
      <div className="flex flex-col gap-4">
        {datas.map((data) => {
          return <StoreCard id={data.id} category={data.category} img={data.img} location={data.location} name={data.name} key={data.id} />;
        })}
      </div>
    </div>
  );
}
