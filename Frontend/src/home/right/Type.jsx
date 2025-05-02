import React from "react";
import { IoSend } from "react-icons/io5";

function Type() {
  return (
    <div className="flex items-center justify-between h-[10vh] px-4 bg-gray-800">
      <input
        type="text"
        placeholder="Type here"
        className="w-full mr-3 px-4 py-2 rounded-xl border border-gray-700 bg-slate-900 text-white outline-none"
      />
      <button className="text-3xl text-white">
        <IoSend />
      </button>
    </div>
  );
}

export default Type;
