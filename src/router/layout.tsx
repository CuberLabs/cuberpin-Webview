import { Outlet } from "react-router-dom";
import { Arrow } from "../assets";
import { postMessage } from "../utils/messageUtil";

export const Layout = () => {
  return (
    <div className="bg-[#18171D] w-full h-full flex flex-col">
      <header className="w-full flex p-6 items-center">
        <Arrow onClick={() => postMessage({ type: "back" })} />
      </header>
      <Outlet />
    </div>
  );
};
