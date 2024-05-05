//CustomBottomSheet

import { Box } from "@mui/material";
import React from "react";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { icons } from "../../assets/icon";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import CustomButton from "../buttons/button";

export default function CustomBottomSheet({
  isopen,
  close,
  children,
  label,
  showButton = true,
}) {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [selected, setSelected] = React.useState([]);
  const classes = useStyles();
 console.log(isopen, close);
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 50 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ borderRadius: "28px !important" }}
    >
      <Box
        style={{
          //  marginTop: "16px",

          overflow: "scroll",
          marginBottom: "0rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );

  return (
    <div onClick={toggleDrawer("bottom", true)} className={classes.wrapper}>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={"bottom"}
            open={isopen}
            style={{ borderRadius: "24px" }}
          >
            <Box
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                close(false);
              }}
            >
              <Typography
                style={{
                  padding: "24px 0px 12px 20px",

                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {label}
              </Typography>

              <img
                src={icons.close.src}
                style={{ padding: "24px 16px 28px 0px" }}
              />
            </Box>
            <Divider />
            {list("bottom")}
           
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
const useStyles = makeStyles({
  wrapper: {
    ".css-9emuhu-MuiPaper-root-MuiDrawer-paper": {
      borderRadius: "24px",
    },
  },
  selected: {
    fontWeight: "600px !important",
  },
});
