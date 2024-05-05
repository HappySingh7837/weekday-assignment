import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../input";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
  leaveFormValidationGenerator,
  userFormValidationGenerator,
} from "@/components/formValidation/userFormValidation";
import CustomButton from "../buttons/button";
import SimpleCustomDropdown from "../input/simpleDropDown";
import { leaveType } from "@/const/dummy";
import { dispatch, store } from "@/redux/store";
import { leaveDetails } from "@/redux/actions/uiAction";

const LeavesBottomSheet = ({onclose}) => {
  const classes = useStyles();
  const [validation, setValidation] = useState({});
  const { handleSubmit, register, errors, getValues, reset } = useForm({
    resolver: yupResolver(leaveFormValidationGenerator({ ...validation })),
  });

  const onSubmit = () => {
    const userDetail = store.getState().common.userData;
    console.log("user-->", userDetail);

    const leaves = store.getState().common.leavesData;
    const { leave, start_date, end_date, reason } = getValues();
    const data = {
      id: userDetail.id + 1,
      name: userDetail.name,
      start_date: start_date,
      end_date: end_date,
      type: leave,
      reason: reason,
      status: "Pending",
    };
    leaves.push(data);
    dispatch(leaveDetails(leaves));
    console.log(getValues());
   // window.location.reload();
    onclose()
  };
  return (
    <Box classes={classes.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleCustomDropdown
          name={"leave"}
          placeholder="Leave Type"
          label={"Leave Type"}
          inputRegister={register}
          error={errors["leave"] ? true : false}
          is_compulsory={true}
          options={leaveType}
        />

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1}>
          <CustomInput
            type="date"
            name="start_date"
            label={"Start Date"}
            inputRegister={register}
            is_compulsory={true}
            error={errors["start_date"] ? true : false}
          />{" "}
          <CustomInput
            type="date"
            name="end_date"
            label={"End Date"}
            inputRegister={register}
            is_compulsory={true}
            error={errors["end_date"] ? true : false}
          />
        </Box>

        <CustomInput
          name={"reason"}
          placeholder="Enter Reason"
          label={" Reason"}
          inputRegister={register}
          error={errors["reason"] ? true : false}
          is_compulsory={true}
        />
        <CustomButton
          label="Submit Leave Application"
          extClasses={classes.btn}
        />
      </form>
    </Box>
  );
};

export default LeavesBottomSheet;
const useStyles = makeStyles({
  wrapper: {
    padding: "20px",
  },
  btn: {
    width: "99% !important",
    backgroundColor: "#189D3B !important",
    border: "1px solid #189D3B",
    minHeight: "38px",
    padding: "4px",
    marginLeft: ".3rem",
    marginRight: ".3rem",
    color: "#ffffff",
    borderRadius: "8px",
    minWidth: "80px",
    height: "50px",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
});
