import { colors } from "@/theme/colors";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";

const SimpleCustomDropdown = ({ options, name, label, handleType, inputRegister, is_compulsory = false, error, ...rest }) => {
  const classes = useStyles({ error });
  const [selectedValue, setSelectedValue] = useState(""); // Initialize with an empty string or a default value

  const handleSelectChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    handleType && handleType(selectedValue);
  }, [selectedValue]);

  return (
    <div className={classes.wrapper}>
      <label htmlFor="SimpleCustomDropdown">{label}{<span style={{ color: "red",}}>
              {is_compulsory ? " *" : ""}
            </span>}</label>
      <select
       ref={inputRegister}
        id={label}
        className={classes.inputWrapper}
        style={{marginTop: "14px"}}
        value={selectedValue}
        onChange={(e) => { e.preventDefault(); handleSelectChange(e); }}
       error={error}
        name={name}
        {...rest}
      >
        <option value="">{label + "..."}</option>
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.display_text}
            </option>
          ))}
      </select>
      {error && (
          <Typography
            style={{ color: "red", fontSize: "12px", marginTop: ".6rem" }}
          >
            {'Please select '}
          </Typography>
        )}
    </div>
  );
};

export default SimpleCustomDropdown;



const useStyles = makeStyles({
  wrapper: {
    padding: " 10px 20px",
    fontFamily:'Mukta'
    //marginTop:'4px'
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
    minHeight: "42px",
    borderRadius: "4px",
    //marginTop: "14px",
    border: (props) =>
    `solid 1px ${props.error ? colors.red : colors.greyscale}`,
    "& input": {
      width: "90%",
      padding: "8px",
      fontFamily:'Mukta',
      outline: "none",
      margin: 0,
      fontSize: "16px",
      fontWeight: 400,
      borderRadius: "4px",
      borderColor: "#F7F7F7",
      backgroundColor: colors.greyscale,
      color: (props) => (props.error ? `${colors.red}` : `${colors.black}`),
     
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
 