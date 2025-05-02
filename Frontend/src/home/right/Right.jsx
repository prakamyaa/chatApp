import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
export default function Logout() {
  return (
    <>
      <div className="w-[90%] bg-slate-600 text-white">
        <Chatuser></Chatuser>
        <div
          className="py-2 flex-prakamya overflow-y-auto scrollbar-hide"
          style={{ maxHeight: "calc(92vh - 8vh)" }}
        >
          <Messages></Messages>
        </div>

        <Type></Type>
      </div>
    </>
  );
}
