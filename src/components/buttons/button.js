import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const CustomButton = ({
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
    
      <button className={extClasses?extClasses: classes.btn} {...rest}  onClick={() => onClick && onClick()}>
        {" "}
        {label}
      </button>

  );
};
export default CustomButton;

const useStyles = makeStyles({
  
  btn:{
    backgroundColor:"#189D3B !important",
    border: "1px solid #189D3B",
    minHeight: "38px",
    padding:'4px',
    marginLeft:'.3rem',
    marginRight:'.3rem',color:'#ffffff',
    borderRadius:'8px',
    minWidth:'80px',
    height:'40px'
  }
  
});
