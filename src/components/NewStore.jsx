import React, { useState } from "react";
import Button from "./ui/Button";

export default function NewStore({ requestType }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState();

  const onClickPostBtn = async () => {
    const newStoreData = { name, location, storePhoneNumber, category, img };
    console.log(newStoreData);
  };

  const onClickPutBtn = async () => {
    const updateStoreData = { name, location, storePhoneNumber, category, img };
    console.log(updateStoreData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file instanceof Blob || file instanceof File) {
      setImg(file);

      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        // reader.result에 미리보기 URL이 저장됨
        console.log("미리보기 URL:", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("올바른 이미지 파일을 선택해주세요.");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-center mx-auto w-fit text-xl">가게 {requestType ? "생성하기" : "변경하기"}</h1>
      <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="위치" value={location} required onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="전화번호" value={storePhoneNumber} required onChange={(e) => setStorePhoneNumber(e.target.value)} />
      <input type="text" placeholder="카테고리" value={category} required onChange={(e) => setCategory(e.target.value)} />
      <input type="file" placeholder="사진" required onChange={handleImageChange} />
      {img && <img src={URL.createObjectURL(img)} alt="미리보기" />}
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
