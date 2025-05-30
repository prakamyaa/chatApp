// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

// ✅ Context should be created outside
export const AuthContext = createContext();

// ✅ Initial user state should be defined outside the component
const getInitialUserState = () => {
  const cookieData = Cookies.get("jwt");
  const localStorageData = localStorage.getItem("ChatApp");
  return cookieData || localStorageData;
};

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const raw = getInitialUserState();
    return raw ? JSON.parse(raw) : undefined;
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => useContext(AuthContext);
