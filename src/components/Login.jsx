import React, { useState } from "react";
// import { loginUser } from '../api/auth';
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:3002/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        const data = await response.json();
        alert(data.result.message);
        Cookies.set("Authorization", `Bearer ${data.result.token}`, { expires: 1 });
        window.location.reload();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert(error);
      console.error("Error occurred during signup:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-5 mx-auto text-xl font-bold text-center">로그인</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input id="email" type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-[80%] mx-auto bg-pink-300 py-1.5 rounded-2xl font-bold text-white hover:bg-pink-500">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
