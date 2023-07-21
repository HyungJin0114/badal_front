import React, { useState } from "react";
import Button from "./ui/Button";
import axios from "axios";

export default function NewStore({ requestType }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState();

  const onClickPostBtn = async () => {
    const newStoreData = { name, location, storePhoneNumber, category, img };
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_SERVERURL}/api/stores`, newStoreData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("회원가입이 완료 됐습니다.");
        window.location.reload();
        console.log(response.data.result);
        //   setResult(response.data.result);
      } else {
        console.log(response.data);
      }
    } catch (error) {}
    console.log(newStoreData);
  };

  const onClickPutBtn = async () => {
    const updateStoreData = { name, location, storePhoneNumber, category, img };
    console.log(updateStoreData);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-center mx-auto w-fit text-xl">가게 {requestType ? "생성하기" : "변경하기"}</h1>
      <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="위치" value={location} required onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="전화번호" value={storePhoneNumber} required onChange={(e) => setStorePhoneNumber(e.target.value)} />
      <input type="text" placeholder="카테고리" value={category} required onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="사진" value={img} required onChange={(e) => setImg(e.target.value)} />
      <Button
        onClick={
          requestType
            ? () => {
                onClickPostBtn();
              }
            : () => {
                onClickPutBtn();
              }
        }
        text={requestType ? "생성하기" : "변경하기"}
      />
    </div>
  );
}
