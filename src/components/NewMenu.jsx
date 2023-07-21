import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function MenuUpload() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const { myStore } = useAuthContext();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      await axios.post(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}/menus`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("메뉴가 업로드되었습니다.");
      // 성공적으로 업로드 후 처리할 로직을 작성하세요.
    } catch (error) {
      alert("메뉴 업로드에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-center mx-auto w-fit text-xl">메뉴 업로드</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>메뉴 이름</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>가격</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>설명</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>이미지</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit">업로드</button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import Button from "./ui/Button";
// import axios from "axios";

// export default function NewMenu({ requestType }) {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [storePhoneNumber, setStorePhoneNumber] = useState("");
//   const [category, setCategory] = useState("");
//   const [img, setImg] = useState();

//   const onClickPostBtn = async () => {
//     const newStoreData = { name, location, storePhoneNumber, category, img };
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_SERVERURL}/api/stores`, newStoreData, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         alert("회원가입이 완료 됐습니다.");
//         window.location.reload();
//         console.log(response.data.result);
//         //   setResult(response.data.result);
//       } else {
//         console.log(response.data);
//       }
//     } catch (error) {}
//     console.log(newStoreData);
//   };

//   const onClickPutBtn = async () => {
//     const updateStoreData = { name, location, storePhoneNumber, category, img };
//     console.log(updateStoreData);
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <h1 className="font-bold text-center mx-auto w-fit text-xl">가게 {requestType ? "생성하기" : "변경하기"}</h1>
//       <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
//       <input type="text" placeholder="위치" value={location} required onChange={(e) => setLocation(e.target.value)} />
//       <input type="text" placeholder="전화번호" value={storePhoneNumber} required onChange={(e) => setStorePhoneNumber(e.target.value)} />
//       <input type="text" placeholder="카테고리" value={category} required onChange={(e) => setCategory(e.target.value)} />
//       <input type="text" placeholder="사진" value={img} required onChange={(e) => setImg(e.target.value)} />
//       <Button
//         onClick={
//           requestType
//             ? () => {
//                 onClickPostBtn();
//               }
//             : () => {
//                 onClickPutBtn();
//               }
//         }
//         text={requestType ? "생성하기" : "변경하기"}
//       />
//     </div>
//   );
// }
