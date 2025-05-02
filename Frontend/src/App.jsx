import React from "react";
import Right from "./home/right/Right";
import Left from "./home/left/Left";
import Logout from "./home/left/left1/Logout";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout></Logout>

        <Left />

        <Right />
      </div>
    </>
  );
}

export default App;
