import React, { useState } from 'react';
import Button from './ui/Button';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

export default function NewStore({ requestType }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [storePhoneNumber, setStorePhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState();
  const { myStore } = useAuthContext();

  const onClickPostBtn = async () => {
    // const newStoreData = { name, location, storePhoneNumber, category, img };
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('location', location);
      formData.append('storePhoneNumber', storePhoneNumber);
      formData.append('category', category);
      formData.append('image', image);

      await axios.post(`${process.env.REACT_APP_API_SERVERURL}/api/stores`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('가게가 업로드되었습니다.');
      window.location.reload();

      // 성공적으로 업로드 후 처리할 로직을 작성하세요.
    } catch (error) {
      alert('가게 업로드에 실패했습니다.');

      console.error(error);
    }
  };

  const onClickPutBtn = async () => {
    // const newStoreData = { name, location, storePhoneNumber, category, img };
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('location', location);
      formData.append('storePhoneNumber', storePhoneNumber);
      formData.append('category', category);
      formData.append('image', image);

      await axios.patch(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${myStore.id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('가게가 업로드되었습니다.');
      window.location.reload();

      // 성공적으로 업로드 후 처리할 로직을 작성하세요.
    } catch (error) {
      alert('가게 업로드에 실패했습니다.');
      console.error(error);
    }
  };

  const onClickDelBtn = (e) => {
    e.preventDefault();
    console.log('딜리트버튼 누르면');
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-center mx-auto w-fit text-xl">가게 {requestType ? '생성하기' : '변경하기'}</h1>
      <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="위치" value={location} required onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="전화번호" value={storePhoneNumber} required onChange={(e) => setStorePhoneNumber(e.target.value)} />
      <input type="text" placeholder="카테고리" value={category} required onChange={(e) => setCategory(e.target.value)} />
      <input type="file" placeholder="사진" required onChange={(e) => setImage(e.target.files[0])} />
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
        text={requestType ? '생성하기' : '변경하기'}
      />
      {!requestType && <Button onClick={onClickDelBtn} text={'삭제'} />}
    </div>
  );
}

//requestType 넘어올 때 변경하기 같이 해야하고, storeId값 받아와야함 append안에 name으로 받아야하고
