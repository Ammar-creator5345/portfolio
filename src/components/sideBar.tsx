import Drawer from "@mui/material/Drawer";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideBar: React.FC<PropsType> = ({ open, setOpen }) => {
  const navlinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "MY RESUME", path: "/my-resume" },
    { name: "CONTACT ME", path: "/contact-me" },
  ];
  return (
    <Drawer
      transitionDuration={700}
      slotProps={{
        paper: {
          sx: {
            bgcolor: "rgba(0,0,0,1)",
            width: "300px",
            height: "100%",
            boxShadow: "1px 1px 10px red",
          },
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="flex flex-col justify-between h-full py-3">
        <div>
          <button
            onClick={() => setOpen(false)}
            className="bg-[#000000] py-[6px] px-2 rounded-md ml-2 mt-[5px] flex items-center justify-center hover:bg-[#0e0d0d]"
          >
            <CloseIcon sx={{ color: "white" }} />
          </button>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center font-[500] w-full tracking-[2px]">
            {navlinks.map((link, i) => (
              <NavLink
                key={i}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `link-animation ${
                    isActive ? "bg-[orange] text-white" : "text-[orange]"
                  }`
                }
                to={link.path}
              >
                <span className="">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#666666] font-[500] text-sm text-center">
            © 2025 <b className="text-[#8a8989]">Ammar</b>. All rights reserved.
          </h3>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
