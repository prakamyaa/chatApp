import React from "react";

function Chatuser() {
  return (
    <>
      <div className="pt-5 pl-5 pb-6 h-[8vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                alt="User profile"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl">Prakamya</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
}

export default Chatuser;
