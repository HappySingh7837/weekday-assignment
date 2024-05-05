import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Label } from "@mui/icons-material";

const ReferalButton = ({
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
      <img
        src="https://logo.clearbit.com/dropbox.com"
        className={classes.logo}
      />
      <img
        src="https://logo.clearbit.com/dropbox.com"
        className={classes.logo}
      />
      <Typography className={classes.label}>{label}</Typography>
    </Box>
  );
};

export default ReferalButton;

const useStyles = makeStyles({
  label: {
    fontSize: "14px",
    color: "#ffffff",
  },
  logo: {
    height: "20px",
    borderRadius: "50%",
    border: "1px solid white",
    transform: "translateY(0px)",
    marginRight: ".4rem",
    filter: "blur(1px)",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#4942DB",
    width: "96%",
    borderRadius: "8px",
    marginTop: "8px",
  },
});
