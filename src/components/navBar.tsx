import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SideBar from "./sideBar";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <SideBar open={open} setOpen={setOpen} />
      <div className="bg-[rgba(0,0,0,0.1)] border-b z-[55] rounded-b-xl px-4 py-[6px] shadow-[0px_1px_5px_#9b8787] dark:shadowColor border-b-white/10 w-full backdrop-blur-lg fixed top-0 left-0 p-2">
        <button
          onClick={() => setOpen(true)}
          className="p-[6px] px-2 rounded-md flex items-center justify-center hover:bg-[#d1cccc] dark:hover:bg-[#0e0d0d]"
        >
          <MenuRoundedIcon className="text-black dark:text-white" />
        </button>
      </div>
    </>
  );
};

export default NavBar;
