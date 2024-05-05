import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import JobCard from "../cards";
import JobFilters from "../headers";

const MainContainer = ({ data, getMoreJobs }) => {
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filteredData.length > 0) {
      console.log(filteredData);
    }
  }, [filteredData]);

  const handleFilter = (filters) => {
    console.log("filter", filters);
    const filteredListings = data.filter((job) => {
      let passFilter = true;
      if (filters.role && job.jobRole !== filters.role) {
        passFilter = false;
      }
      if (filters.location && job.location !== filters.location) {
        passFilter = false;
      }
      if (filters.experience) {
        const { minExp, maxExp } = job;
        const [minExpFilter, maxExpFilter] = filters.experience.split("-");
        if (
          (minExpFilter && minExp && minExp < parseInt(minExpFilter)) ||
          (maxExpFilter && maxExp && maxExp > parseInt(maxExpFilter))
        ) {
          passFilter = false;
        }
      }
      if (filters.minBaseSalary) {
        const [minSalaryFilter, maxSalaryFilter] =
          filters.minBaseSalary.split("-");
        if (
          (minSalaryFilter &&
            job.minJdSalary !== null &&
            job.minJdSalary < parseInt(minSalaryFilter)) ||
          (maxSalaryFilter &&
            job.maxJdSalary !== null &&
            job.maxJdSalary > parseInt(maxSalaryFilter))
        ) {
          passFilter = false;
        }
      }
      if (
        filters.companyName &&
        !job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase())
      ) {
        passFilter = false;
      }

      if (
        filters.remoteOnSite === "remote" &&
        job.location !== filters.remoteOnSite
      ) {
        passFilter = false;
      }

      if (filters.remoteOnSite === "on-site" && job.location === "remote") {
        passFilter = false;
      }

      return passFilter;
    });

    if (filteredListings.length === 0) {
      alert("Oops! No Result Found");
    }

    setFilteredData(filteredListings);
  };

  return (
    <Box className={classes.rootWrapper}>
      <Box>
        <JobFilters callBack={handleFilter} />
      </Box>
      <Grid container spacing={4}>
        {(filteredData.length > 0 ? filteredData : data).map((item) => (
          <Grid key={item.jdUid} item xs={12} sm={6} md={4} spacing={4}>
            <Box className={classes.contentCard}>
              <JobCard data={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        className={classes.loadMoreButton}
        onClick={getMoreJobs}
      >
        <Typography>Load More Jobs</Typography>
      </Box>
    </Box>
  );
};

export default MainContainer;

const useStyles = makeStyles({
  rootWrapper: {
    padding: "24px",
  },
  contentCard: {
    borderRadius: "8px",
    boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.1)",
    padding: "16px",
  },
  loadMoreButton: {
    padding: "20px",
    textAlign: "center",
    background: "#f7f7f7",
    marginTop: "2rem",
    color: "#4942DB",
    fontWeight: "500",
    fontSize: "22px",
    borderRadius: "8px",
    cursor: "pointer",
  },
});
