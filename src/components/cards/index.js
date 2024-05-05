import { HourglassTopSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import CustomButton from "../buttons/button";
import EasyApplyButton from "../buttons/EasyApplyButton";
import ReferalButton from "../buttons/reefralButton";
import { redirectToExternalURL } from "@/helpers/helperFunc";

const JobCard = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.dateDiv}>
        <HourglassTopSharp className={classes.icon} />
        <Typography className={classes.postedText}>Posted 10 days Ago</Typography>
      </Box>
      <Box className={classes.companyDetails}>
        <Box>
          <img src={data.logoUrl} className={classes.logo} />
        </Box>
        <Box className={classes.companyInfo}>
          <Typography className={classes.companyName}>{data.companyName}</Typography>
          <Typography className={classes.jobRole}>{data.jobRole}</Typography>
          <Typography className={classes.location}>{data.location}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography className={classes.salaryText}>
          Estimated salary : {data.minJdSalary} - {data.maxJdSalary} {data.salaryCurrencyCode}
        </Typography>
        <Typography className={classes.aboutText}>About Company</Typography>
        <Typography className={classes.aboutUsText}>About Us</Typography>
        <Box className={`${classes.jobDetailsBox} ${expanded ? classes.expanded : ""}`}>
          <Typography>{data.jobDetailsFromCompany}</Typography>
        </Box>
        {!expanded && (
          <Box className={classes.blurBox}>
            <Typography>Letraset sheets containing Lorem assignment</Typography>
          </Box>
        )}
        {!expanded && (
          <Box className={classes.viewJobBox} onClick={handleExpand}>
            <Typography className={classes.viewJobText}>View job</Typography>
          </Box>
        )}
        <Typography className={classes.minExpText}>Minimun Experience</Typography>
        <Typography>{data.minExp} years</Typography>
      </Box>
      <Box>
        <EasyApplyButton label="Easy Apply" onClick={() => redirectToExternalURL(data.jdLink)} />
        <ReferalButton
          label="Unlock referal asks"
          onClick={() => redirectToExternalURL(data.jdLink)}
        />
      </Box>
    </Box>
  );
};

export default JobCard;

const useStyles = makeStyles({
  rootWrapper: {
    color: "#202021",
    padding: "4px",
  },
  dateDiv: {
    border: "2px solid #F7f7f7",
    borderRadius: "16px",
    display: "flex",
    padding: "4px",
    width: "180px",
    color: "#767676",
  },
  icon: {
    height: "16px",
  },
  postedText: {
    fontSize: "12px",
  },
  companyDetails: {
    display: "flex",
    marginTop: "16px",
  },
  logo: {
    height: "60px",
    width: "60px",
  },
  companyInfo: {
    marginLeft: "12px",
  },
  companyName: {
    color: "#8F8E8F",
    fontSize: "18px",
  },
  jobRole: {
    color: "#202021",
    fontSize: "22px",
    fontWeight: "200",
    marginTop: "4px",
  },
  location: {
    color: "#202021",
    marginTop: "4px ",
    fontSize: "16px",
  },
  salaryText: {
    color: "#4C5969",
    marginTop: "8px",
    fontSize: "18px",
    fontWeight: "400",
  },
  aboutText: {
    marginTop: "8px",
    fontSize: "18px",
    fontWeight: "400",
  },
  aboutUsText: {
    fontSize: "18px",
    fontWeight: "500",
  },
  jobDetailsBox: {
    height: "180px",
    overflowY: "hidden",
    marginTop: "0px",
    fontSize: "18px",
    transition: "height 0.5s",
  },
  expanded: {
    height: "235px",
    overflowY: "scroll",
  },
  blurBox: {
    filter: "blur(8px)",
    height: "30px",
    transform: "translateY(0px)",
  },
  viewJobBox: {
    transform: "translateY(0px)",
    textAlign: "center",
    color: "#4942DB",
    cursor: "pointer",
  },
  viewJobText: {
    textAlign: "center",
    color: "#4942DB",
  },
  minExpText: {
    color: "#8A8B8A",
    marginTop: "1rem",
  },
});
