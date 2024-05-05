import { colors } from "@/theme/colors";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const CustomInput = ({
  label,
  name,
  inputRegister,
  error,
  msg,
  type,
  formEventhandlerOnBlur,
  formEventhandlerOnFocus,
  is_compulsory = false,
  placeholder,
  req = false,
  ...rest
}) => {
  const classes = useStyles({ error });
  console.log("errors", error);
  return (
    <>
      <Box className={classes.wrapper}>
        {label && (
          <Typography>
            {label}
            <span style={{ color: "red" }}>{is_compulsory ? " *" : ""}</span>
          </Typography>
        )}
        <Box
          style={{
            backgroundColor: "#F7F7F7",
            display: "flex",
            padding: "2px",
            borderRadius: "6px",
          }}
        >
          {
            <input
              className={classes.inputWrapper}
              placeholder={placeholder}
              ref={inputRegister}
              name={name}
              error={label}
              {...rest}
              type={type}
              onChange={(e) => {
                e.preventDefault();
              }}
            />
          }
        </Box>
        {error && (
          <Typography
            style={{ color: "red", fontSize: "12px", marginTop: ".6rem" }}
          >
            {"Please " + label}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default CustomInput;

const useStyles = makeStyles({
  wrapper: {
    padding: "10px ",
    marginTop: "1rem",
    // height: "56px",
    //width:'100%',
    //    backgroundColor:'#F7F7F7'
  },
  inputWrapper: {
    border: "none",
    backgroundColor: "#F7F7F7",
    borderColor: "#F7F7F7",
    marginLeft: "0rem",
    padding: ".4rem",
    width: "100%",
    minHeight: "32px",
    borderRadius: "4px",
    "& input": {
      width: "100%",
      padding: "8px",

      outline: "none",
      margin: 0,
      fontSize: "16px",
      fontWeight: 400,
      borderRadius: "4px",
      borderColor: "#F7F7F7",
      backgroundColor: colors.greyscale,
      color: (props) => (props.error ? `${colors.red}` : `${colors.black}`),
      border: (props) =>
        `solid 1px ${props.error ? colors.red : colors.greyscale}`,
      "&::placeholder": {
        color: (props) =>
          props.error ? `${colors.red}` : `${colors.greyText}`,
        fontSize: "1rem",
      },
    },
    "&:focus": {
      borderColor: (props) => (props.error ? colors.red : colors.greyscale),
      borderColor: "#F7F7F7",
    },
  },
});
