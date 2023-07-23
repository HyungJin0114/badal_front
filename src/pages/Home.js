import React, { useEffect, useState } from 'react';
import Category from '../components/Category';
import StoreCard from '../components/StoreCard';
import axios from 'axios';

export default function Home() {
  const [result, setResult] = useState([]);
  const [category, setCategory] = useState('전체');
  const [stores, setStores] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const getAllStores = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          params: { category },
        });

        if (response.status === 200) {
          setResult(response.data.result);
          setStores(response.data.result);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert('데이터 불러오기 실패');
      }
    };
    getAllStores();
  }, [category]); // 카테고리가 변경될 때마다 다시 요청

  useEffect(() => {
    // 검색어가 변경될 때마다 상점 목록을 필터링하여 결과를 설정
    const filteredStores = result.filter((store) => store.name.toLowerCase().includes(searchKeyword.toLowerCase()));
    setStores(filteredStores);
  }, [searchKeyword, result]);

  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <input
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
          className="w-[80%] border rounded-md p-2 border-slate-200 h-8"
          placeholder="검색창"
        ></input>
      </div>
      <Category setCategory={setCategory} category={category} />
      <div className="flex flex-col gap-4">
        {result &&
          stores.map((data) => {
            return (
              <StoreCard
                id={data.id}
                category={data.category}
                image={data.image}
                location={data.location}
                name={data.name}
                key={data.id}
              />
            );
          })}
      </div>
    </div>
  );
}
