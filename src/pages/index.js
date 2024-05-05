import MianContainer from "@/components/container";
import { getJobDetailsApiCall } from "@/redux/actions";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useState } from "react";

const index = () => {
  const [jobsData, setjobsData] = useState([]);
  const [pageNo, setpageNo] = useState(0);
  useEffect(() => {
    getJobsDetails(pageNo);
  }, []);

  const getJobsDetails = async (page) => {
    const res = await getJobDetailsApiCall(page);

    if (res) {
      console.log("-->", res.jdList);
      if (jobsData.length > 0) {
        setjobsData([...jobsData, ...res.jdList]);
      } else {
        setjobsData(res.jdList);
      }
    }
  };
  const handlePagination = async (page) => {
    getJobsDetails(pageNo + 1);
    setpageNo(pageNo + 1);
  };
  return (
    <Box>
      {jobsData.length > 0 && (
        <MianContainer
          id="jobDiv"
          key={"jobDiv"}
          data={jobsData}
          getMoreJobs={handlePagination}
        />
      )}
    </Box>
  );
};

export default index;

const useStyles = makeStyles({
  wrapper: {
    width: "50%",
    border: "1px solid #EFEFEF",
    margin: "auto",
    padding: "auto",
    transform: "translate(0%, 50%)",
    padding: "20px",
    borderRadius: "8px",
  },
});
