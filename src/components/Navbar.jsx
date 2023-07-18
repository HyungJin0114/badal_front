import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
// import Login from "./Login";
// import Signup from "./Signup";
// import "../styles/nav.css";
import Cookies from "js-cookie";
import Login from "./Login";
import Signup from "./Signup";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "80%",
    "max-width": "450px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "4rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

Modal.setAppElement("#root"); // App 요소 설정

export default function Navbar() {
  const [token, setToken] = useState(Cookies.get("authorization"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSignupLogIn, setIsSignupLogIn] = useState("login");

  useEffect(() => {
    const storedToken = Cookies.get("authorization");
    setToken(storedToken);
  }, []);

  return (
    <header className="flex justify-between gap-3 border-b border-gray pb-3">
      <div className="w-[30%]">{token && <Link to="/posts/new">글쓰기</Link>}</div>
      <div>
        <Link to={"/"} className="flex  items-center text-4xl text-pink-500 font-bold">
          <h1>8row</h1>
        </Link>
      </div>
      <div className=" flex justify-end items-center gap-3 font-semibold">
        {/* <Link to="/posts">Post</Link> */}
        {token ? (
          <Link to="/profile">내 프로필</Link>
        ) : (
          <button
            onClick={() => {
              setModalIsOpen(true);
              setIsSignupLogIn("signup");
            }}>
            회원가입
          </button>
        )}
        {token ? (
          <button
            onClick={() => {
              Cookies.remove("authorization");
              window.location.reload();
            }}>
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => {
              setModalIsOpen(true);
              setIsSignupLogIn("login");
            }}>
            로그인
          </button>
        )}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <div className="">{isSignupLogIn === "login" ? <Login /> : <Signup />}</div>
      </Modal>
    </header>
  );
}
