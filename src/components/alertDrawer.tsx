import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import React from "react";

const AlertDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Drawer
      slotProps={{
        paper: {
          sx: {
            height: "auto",
            padding: "10px",
            backgroundColor: "orange",
            color: "white",
            top: "50px",
          },
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
      anchor="right"
    >
      <Box
        sx={{
          width: 250,
        }}
      >
        <h1 className="text-lg font-semibold">Message Sent SuccessFully</h1>
      </Box>
    </Drawer>
  );
};

export default AlertDrawer;
