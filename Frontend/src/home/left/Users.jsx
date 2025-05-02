import React from "react";

function Users() {
  return (
    <div>
      <div className="flex items-center space-x-4 px-8 py-7 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="w-16 rounded-full overflow-hidden">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="User profile"
          />
        </div>

        <div>
          <h1 className="text-lg font-bold">Gordon Ramsay</h1>
          <span className="text-gray-500">prak</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
