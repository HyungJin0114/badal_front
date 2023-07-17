import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const count = ["전체", "양식", "일식", "한식", "중식"];
  return (
    <div className="flex flex-row my-3 mx-auto w-[75%] overflow-x-auto">
      {count.map((item) => {
        return (
          <div className="">
            <CategoryCard category={item} />
          </div>
        );
      })}
    </div>
  );
}
