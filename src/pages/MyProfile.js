import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';
import Button from '../components/ui/Button';
import StoreInfo from '../components/StoreInfo';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  const { user, isLoading, myStore } = useAuthContext();
  console.log('aaaaa', user.isAdmin);

  // 컴포넌트가 마운트될 때 사용자 데이터를 가져옵니다.

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <></>;
  } else {
    return (
      <div className="flex flex-col gap-5 ">
        <h1 className="my-5 text-center content-center text-2xl">
          <span className="font-bold">{user.name}</span>님의 정보
        </h1>
        <div className="border-b-2 border-slate-300 mb-5"></div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">이름</p> <span className="ms-10">{user.name}</span>
          </div>
        </div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">비밀번호</p> <span className="ms-10">{'************'}</span>
          </div>
        </div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">닉네임</p> <span className="ms-10">{user.nickname}</span>
          </div>
        </div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">전화번호</p> <span className="ms-10">{user.phoneNumber}</span>
          </div>
        </div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">포인트</p> <span className="ms-10">{user.point}P</span>
          </div>
        </div>
        <div className="flex flex-row  items-center text-lg justify-between">
          <div className="flex flex-col">
            <p className="font-bold">이름</p> <span className="ms-10">{user.name}</span>
          </div>
          <Button text={'변경'}></Button>
        </div>
        <div className="border-b-2 border-slate-300 mb-5"></div>
        {user.isAdmin && (
          <div>
            <h1 className="text-center text-xl font-bold">{`${myStore.name}님의 가게 정보`}</h1>
            <StoreInfo storeId={myStore.id} />
            <div className="border-b-2 border-slate-300 my-5"></div>
          </div>
        )}
        {user && (
          <div>
            <Link to={`/ordered`} className="font-bold hover:text-pink-300">
              나의 주문내역
            </Link>
          </div>
        )}
      </div>
    );
  }
}
