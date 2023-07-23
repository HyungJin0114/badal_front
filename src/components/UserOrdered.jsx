import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import BorderBarUi from './ui/BorderBarUi';
import Button from './ui/Button';
import Modal from 'react-modal';
import CreateReview from './Review/CreateReview';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '80%',
    maxWidth: '450px',
    position: 'absolute',
    height: '450px',
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

export default function UserOrdered() {
  const [orders, setOrders] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useAuthContext();
  const [orderId, setOrderId] = useState();
  const [requestType, setRequestType] = useState();
  const [newStoreId, setNewStoreId] = useState();
  const [reviewId, setReviewId] = useState();

  useEffect(() => {
    const getOrderedFromUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/orders`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          setOrders(response.data.result);
        } else {
          alert('뭔가가 이상해');
        }
      } catch (error) {
        console.log('오류발생!');
      }
    };

    getOrderedFromUser();
  }, []);

  return (
    <div>
      {user && <h1 className="font-bold text-xl text-center">나의 주문내역</h1>}
      <div className="my-3 ">
        {/* <span className="font-bold flex flex-col content-center text-2xl">{myStore.name} 가게 주문내역</span> */}
        <BorderBarUi></BorderBarUi>

        {orders &&
          orders.map((order) => {
            return (
              <div className="my-2 border-b rounded-md border-slate-300" key={order.id}>
                <h1 className="text-center text-lg font-bold">{order.id}번째 주문</h1>
                {order.OrderMenus &&
                  order.OrderMenus.map((menu) => {
                    return (
                      <div key={menu.Menu.menuName} className="my-1">
                        <div className="flex p-1 flex-row justify-between">
                          <h1>
                            {menu.Menu.menuName}
                            <span className="mx-2">{menu.count}개</span>
                          </h1>
                          <p>{menu.Menu.price * menu.count}₩</p>
                        </div>
                      </div>
                    );
                  })}
                <div className="flex mx-auto w-fit">
                  {!order.delivered && (
                    <div>
                      <p className="p-2">배송중</p>
                    </div>
                  )}
                  {order.delivered && (
                    <div className="flex flex-row gap-5 items-center p-2 justify-between">
                      <p>배송완료됐습니다.</p>
                      {!order.Review && (
                        <div>
                          <Button
                            onClick={() => {
                              setOrderId(order.id);
                              setModalIsOpen(true);
                              setNewStoreId(order.storeId);
                              setRequestType('POST');
                            }}
                            text={'리뷰달기'}
                          />
                        </div>
                      )}
                      {order.Review && (
                        <div>
                          <Button
                            onClick={() => {
                              setOrderId(order.id);
                              setModalIsOpen(true);
                              setNewStoreId(order.storeId);
                              setReviewId(order.Review.id);
                              setRequestType('PUT');
                            }}
                            text={'리뷰 수정'}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        {(!orders || orders.length === 0) && <div>주문내역이 없습니다.</div>}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <style>{slideUpAnimation}</style>
        <div className="">
          <CreateReview orderId={orderId} reviewId={reviewId} newStoreId={newStoreId} requestType={requestType} />
        </div>
      </Modal>
    </div>
  );
}
