import React, { useEffect, useState } from 'react';
import Category from '../components/Category';
import StoreCard from '../components/StoreCard';
import axios from 'axios';

export default function Home() {
  const [result, setResult] = useState();

  useEffect(() => {
    const getAllStores = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          console.log(response.data.result);
          setResult(response.data.result);
        }
      } catch (error) {}
    };
    getAllStores();
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <input className="w-[80%] border rounded-md p-2 border-slate-200 h-8" placeholder="검색창"></input>
      </div>
      <Category />
      <div className="flex flex-col gap-4">
        {result &&
          result.map((data) => {
            return <StoreCard id={data.id} category={data.category} img={data.img} location={data.location} name={data.name} key={data.id} />;
          })}
      </div>
    </div>
  );
}
