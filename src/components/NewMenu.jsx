import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

export default function MenuUpload({ requestType, menuId }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { myStore } = useAuthContext();
  console.log(menuId);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('menuName', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('image', image);
      console.log(requestType);
      if (requestType === 'POST') {
        await axios.post(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}/menus`, formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('메뉴가 업로드되었습니다.');
        window.location.reload();

        // 성공적으로 업로드 후 처리할 로직을 작성하세요.
      } else {
        await axios.put(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}/menus/${menuId}`, formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('메뉴가 수정되었습니다.');
        window.location.reload();

        // 성공적으로 업로드 후 처리할 로직을 작성하세요.
      }
    } catch (error) {
      alert('메뉴 업로드에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-center mx-auto w-fit text-xl">메뉴 ${requestType}</h2>
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
        {requestType === 'POST' && (
          <button className="text-xl font-bold mt-4" type="submit">
            업로드
          </button>
        )}
        {requestType === 'PUT' && (
          <button className="text-xl font-bold mt-4" type="submit">
            수정하기
          </button>
        )}
      </form>
    </div>
  );
}
