import React, { useState } from "react";
// import { onclickEmailConfirmBtn, signupUser } from "../api/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("비빌번호와 확인이 다름");
      setPassword("");
      setConfirm("");
      return;
    }
    // signupUser(nickname, password, confirm, email, emailConfirm, comment, imgUrl);
  };

  return (
    <div>
      <h2 className="font-bold mb-4">회원가입</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" value={name} required onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="비밀번호 확인" value={confirm} required onChange={(e) => setConfirm(e.target.value)} />
        <input type="email" placeholder="이메일" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="email" placeholder="휴대폰번호" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
        {/* <input type="text" placeholder="이메일 인증" value={emailConfirm} required onChange={(e) => setEmailConfirm(e.target.value)} /> */}
        <input type="nickname" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        {/* <input type="text" placeholder="한줄 자기소개" value={comment} onChange={(e) => setComment(e.target.value)} /> */}
        {/* <input type="email" placeholder="프로필 이미지" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} /> */}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
