import React, { useState } from "react";

export default function NewStore() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-center mx-auto w-fit text-xl">가게 생성</h1>
      <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="위치" value={location} required onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="전화번호" value={storePhoneNumber} required onChange={(e) => setStorePhoneNumber(e.target.value)} />
      <input type="text" placeholder="카테고리" value={category} required onChange={(e) => setCategory(e.target.value)} />
    </div>
  );
}
