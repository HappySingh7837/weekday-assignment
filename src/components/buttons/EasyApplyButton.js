import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Bolt } from "@mui/icons-material";

const EasyApplyButton = ({
  label = "",
  onClick,
  disabled,
  icon,
  isGrey,
  extClasses,
  ...rest
}) => {
  const classes = useStyles();
  console.log("disabled", disabled);
  return (
    <Box className={classes.wrapper}>
      <Bolt className={classes.icon} />
      <button
        className={extClasses ? extClasses : classes.btn}
        {...rest}
        onClick={() => onClick && onClick()}
      >
        {label}
      </button>
    </Box>
  );
};

export default EasyApplyButton;

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#55EEC2",
    border: "none",
    minHeight: "38px",
    borderRadius: "8px",
    minWidth: "80px",
    height: "40px",
    fontWeight: "600",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    backgroundColor: "#55EEC2",
    width: "98%",
    borderRadius: "8px",
    marginTop: "8px",
  },
  icon: {
    color: "yellow",
    borderColor: "#000000",
    marginRight: "8px",
  },
});
