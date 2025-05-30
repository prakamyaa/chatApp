import React from "react";

import { FiLogOut } from "react-icons/fi";

function Logout() {
  return (
    <>
      <div className="w-[4%] bg-slate-700 text-white flex flex-col justify-end items-center">
        <div className="p-3">
          <form action="">
            <div className="flex space-x-3 ">
              <button>
                <FiLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Logout;
