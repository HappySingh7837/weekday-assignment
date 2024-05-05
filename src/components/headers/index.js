import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Roles, baseSalary, exprience, locations } from "@/const/dummy";

const JobFilters = ({ callBack }) => {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    experience: "",
    minBaseSalary: "",
    remoteOnSite: "",
    companyName: "",
  });

  useEffect(() => {
    const hasValue = Object.values(filters).some((value) => value !== "");

    if (hasValue) {
      callBack(filters);
    }
  }, [filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box className={classes.wrapper}>
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel id="roles-on-site-label">Roles</InputLabel>
          <Select
            labelId="roles-on-site-label"
            label="Roles"
            name="role"
            value={filters.role}
            onChange={handleInputChange}
          >
            {Roles.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            label="Number of Employees"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
          >
            {locations.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            labelId="experience-label"
            label="Experience"
            name="experience"
            value={filters.experience}
            onChange={handleInputChange}
          >
            {exprience.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="minBaseSalary-label">Min Base Salary</InputLabel>
          <Select
            labelId="minBaseSalary-label"
            label="Min Base Salary"
            name="minBaseSalary"
            value={filters.minBaseSalary}
            onChange={handleInputChange}
          >
            {baseSalary.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="remoteOnSite-label">Remote/On-site</InputLabel>
          <Select
            labelId="remoteOnSite-label"
            label="Remote/On-site"
            name="remoteOnSite"
            value={filters.remoteOnSite}
            onChange={handleInputChange}
          >
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="on-site">On-site</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Company Name"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default JobFilters;

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    width: "180px",
    margin: "6px",
  },
  textField: {
    width: "200px",
    margin: "6px",
  },
});
