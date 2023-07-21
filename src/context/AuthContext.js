import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [myStore, setMyStore] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_SERVERURL}/api/me`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      const { data } = await response;
      if (response.status === 202) {
        if (data.store !== null) {
          console.log(data);
          setMyStore(data.store);
        } else {
          setMyStore({});
        }
      } else if (response.status === 200) {
        setMyStore({});
      } else {
        setMyStore({});
        setUser({});
      }
      setUser(data.user); // 사용자 정보를 받아와서 컨텍스트의 user 상태를 업데이트합니다.
      setIsLoading(false);
    } catch (error) {
      setMyStore({});
      setUser({});
      console.log("사용자 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  return <AuthContext.Provider value={{ user, myStore, userId: user && user.id, isLoading }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
