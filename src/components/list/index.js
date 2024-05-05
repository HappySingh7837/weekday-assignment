import CustomButton from "@/components/buttons/button";
import { leaves } from "@/const/dummy";
import { leaveDetails } from "@/redux/actions/uiAction";
import { dispatch, store } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState, useEffect } from "react";

const LeaveList = ({ isEmp = false, callback }) => {
  const classes = useStyles();

  const [pending, setPending] = useState([]);
  const [leavesData, setLeavesData] = useState(leaves);

  useEffect(() => {
    const leavesUpdate = store.getState().common.leavesData;
    setLeavesData(leavesUpdate);
    console.log("Leavesup", leaves);
  }, [callback]);

  useEffect(() => {
    setLeavesData(leaves);
    console.log("Leaves", leaves);
  }, [leaves]);

  useEffect(() => {
    if (leavesData) {
      const pendingLeaves = leavesData.filter(
        (leave) => leave.status === "Pending"
      );
      setPending(pendingLeaves);
    }
  }, [leavesData]);

  const changeStataus = (leaveId, status) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === leaveId ? { ...leave, status: status } : leave
    );
    const pendingLeaves = updatedLeaves.filter(
      (leave) => leave.status === "Pending"
    );
    setPending(pendingLeaves);
    setLeavesData(updatedLeaves);
  };

  return (
    <Box>
      {pending &&
        pending.map((item) => {
          return (
            <Box className={classes.wrapper}>
              <Box>
                <Box>
                  <Typography>Name : {item.name}</Typography>
                  <Typography>Start Date :{item.start_date}</Typography>
                  <Typography>End Date : {item.end_date}</Typography>
                </Box>
                <Typography>Reason : {item.reason}</Typography>
                <Typography>Status : {item.status}</Typography>
              </Box>
              {!isEmp && item.status == "Pending" && (
                <Box>
                  {" "}
                  <CustomButton
                    label="Approve"
                    onClick={() => changeStataus(item.id, "Approved")}
                  />
                  <CustomButton
                    label="Reject"
                    onClick={() => changeStataus(item.id, "Rejected")}
                  />
                </Box>
              )}
            </Box>
          );
        })}
      {isEmp && (
        <Typography style={{ padding: "20px" }}>
          History of Applied Leaves
        </Typography>
      )}
      {leavesData &&
        leavesData.map((item) => {
          if (item.status != "Pending")
            return (
              <Box
                className={
                  item.status == "Approved"
                    ? classes.wrapperApproved
                    : item.status != "Pending"
                    ? classes.wrapperRejected
                    : classes.wrapper
                }
              >
                <Box>
                  <Box>
                    <Typography>Name : {item.name}</Typography>
                    <Typography>Start Date :{item.start_date}</Typography>
                    <Typography>End Date : {item.end_date}</Typography>
                  </Box>
                  <Typography>Reason : {item.reason}</Typography>
                  <Typography>Status : {item.status}</Typography>
                </Box>
                {/* {item.status != "Pending" && (
                  <Box>
                    <CustomButton label="Approve" />
                  </Box>
                )} */}
              </Box>
            );
        })}
    </Box>
  );
};

export default LeaveList;
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    border: "1px solid #F3A72E",
    borderRadius: "8px",
    alignItems: "center",
  },
  wrapperRejected: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    border: "1px solid #E31B23",
    borderRadius: "8px",
    alignItems: "center",
  },
  wrapperApproved: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    border: "1px solid #189D3B",
    borderRadius: "8px",
    alignItems: "center",
  },
});
