import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import CartButton from '../components/CartButton';
import Modal from 'react-modal';
import Review from '../components/Review';
import axios from 'axios';
import Loading from '../components/Loading';
import { useAuthContext } from '../context/AuthContext';
import Button from '../components/ui/Button';
import NewMenu from '../components/NewMenu';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '80%',
    maxWidth: '450px',
    position: 'absolute',
    height: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    animation: 'slide-up 0.5s', // 애니메이션 적용
  },
};

// 슬라이드 업 애니메이션을 위한 CSS 키 프레임 정의
const slideUpAnimation = `
  @keyframes slide-up {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translateY(-50%, 0);
    }
  }
`;

export default function Stores() {
  const { myStore } = useAuthContext();

  const { storeId } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuModalIsOpen, setMenuModalIsOpen] = useState(false);
  const [menu, setMenu] = useState();
  const [storeInfo, setStoreInfo] = useState();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${storeId}/reviews`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          const data = await response.data;
          setReview(data.result);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const getMenu = async (storeid) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${storeId}/menus`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (response.status === 200) {
          const data = await response.data;
          if (!data.message) {
            setMenu(data.result);
          } else {
            setMenu();
          }
        }
      } catch (error) {}
    };

    const getStoreById = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/stores/${storeId}`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (response.status === 200) {
          const data = await response.data;
          setStoreInfo(data.result);
        } else {
        }
      } catch (error) {}
    };
    getMenu(storeId);
    getStoreById(storeId);
    getReview();
  }, []);

  if (storeInfo) {
    return (
      <div className="w-full">
        <div className="flex flex-col gap-4  border-b-2 pb-4">
          <img className="rounded-t-xl mx-0 w-full max-h-40" src={storeInfo.image} alt="" />
          <h1 className="text-2xl font-bold mx-3">{storeInfo.name}</h1>
          <p onClick={() => setModalIsOpen(true)} className="font-semibold w-fit mx-3 cursor-pointer transition hover:translate-x-2">
            ⭐ 4.2 <span className="text-slate-500 ">{'리뷰 >'}</span>
          </p>
        </div>
        <div className="p-4 text-slate-500 border-b-2">
          <h1 className="font-semibold ">배달정보</h1>
          <div className="px-2">
            <p>지역명: {storeInfo.location}</p>
            <p>카테고리: {storeInfo.category}</p>
            <p>전화번호: {storeInfo.storePhoneNumber}</p>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-xl font-bold mx-3">{storeInfo.name}의 메뉴</h1>
          {myStore && myStore.id === storeInfo.id && <Button onClick={() => setMenuModalIsOpen(true)} text={'메뉴추가'} />}
          <div className="flex flex-col gap-3">
            {menu &&
              menu.map((menu) => {
                return <MenuCard key={menu.id} admin={myStore && myStore.id === storeInfo.id} menu={menu} storeId={storeId} />;
              })}
          </div>
        </div>
        <div className="fixed bottom-10 right-10 ">
          <CartButton />
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
          <style>{slideUpAnimation}</style>
          <Review reviews={reviews} storeId={storeId} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </Modal>
        <Modal isOpen={menuModalIsOpen} onRequestClose={() => setMenuModalIsOpen(false)} style={customStyles}>
          <style>{slideUpAnimation}</style>
          <NewMenu requestType={'POST'} />
        </Modal>
      </div>
    );
  } else {
    return <Loading />;
  }
}
