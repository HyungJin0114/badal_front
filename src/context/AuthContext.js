import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setUser(data.result); // 사용자 정보를 받아와서 컨텍스트의 user 상태를 업데이트합니다.
      setIsLoading(false);
    } catch (error) {
      console.error("사용자 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  return <AuthContext.Provider value={{ user, userId: user && user.id, isLoading }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
