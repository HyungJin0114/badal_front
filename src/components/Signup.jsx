import React, { useState } from "react";
// import { onclickEmailConfirmBtn, signupUser } from "../api/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickname, setNickname] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [location, setLocation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("비빌번호를 확인해주세요!");
      setPassword("");
      setConfirm("");
      return;
    }
    const userData = { name, password, confirmPassword: confirm, email, phoneNumber, nickname, isAdmin, location };
    try {
      const response = await fetch("http://localhost:3002/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        const data = await response.json();
        alert(data.message);
        window.location.reload();
      } else {
        const data = await response.json();
        alert(data.message);
        setConfirm("");
        setEmail("");
        setIsAdmin(false);
        setName("");
        setNickname("");
        setPassword("");
        setPhoneNumber("");
      }

      // 회원가입 성공 시 로그인 처리?
      // alert(data.userData.nickname, "님의 회원가입 완료!");
    } catch (error) {
      alert(error.message);
      console.error("Error occurred during signup:", error);
    }
    // signupUser(nickname, password, confirm, email, emailConfirm, comment, imgUrl);
  };

  return (
    <div>
      <h2 className="mb-5 mx-auto text-xl font-bold text-center">회원가입</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="비밀번호 확인" value={confirm} required onChange={(e) => setConfirm(e.target.value)} />
        <input type="email" placeholder="이메일" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="휴대폰번호" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
        {/* <input type="text" placeholder="이메일 인증" value={emailConfirm} required onChange={(e) => setEmailConfirm(e.target.value)} /> */}
        <input type="nickname" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <input type="text" placeholder="지역" value={location} onChange={(e) => setLocation(e.target.value)} />
        <div>
          <span className="me-5">사장님이세요?</span>
          <input type="checkbox" placeholder="사장님이세요?" value={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
        </div>
        {/* <input type="email" placeholder="프로필 이미지" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} /> */}
        <button className="w-[80%] mx-auto bg-pink-300 py-1.5 rounded-2xl font-bold text-white hover:bg-pink-500" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
