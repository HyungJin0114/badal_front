import React from "react";
import Category from "../components/Category";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <input className="w-[80%] border rounded-md p-2 border-slate-200 h-8" placeholder="검색창"></input>
      </div>
      <Category />
    </div>
  );
}
