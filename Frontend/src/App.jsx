import React from "react";
import Right from "./home/right/Right";
import Left from "./home/left/Left";
import Logout from "./home/left/left1/Logout";
import Signup from "./components/signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth(); // ✅ Correct usage

  return (
    <>
      {/* <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div> */}

      <Signup />
      {/* <Login></Login> */}
    </>
  );
}

export default App;
