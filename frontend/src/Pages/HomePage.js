import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Table from "../components/Table";

const HomePage = () => {
  const [query, setQuery] = React.useState();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mobilicis Assignment
            </Typography>
            <Button color="inherit">home</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          margin: "auto",
          width: "85%",
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Select */}
        <Box sx={{ width: "80%", marginBottom: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Select Query</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={query}
              label="Select Query"
              onChange={handleChange}
              sx={{ width: "100%" }}
            >
              <MenuItem value={1}>
                Users which have income lower than $5 USD and have a car of
                brand “BMW” or “Mercedes”.
              </MenuItem>
              <MenuItem value={2}>
                Male Users which have phone price greater than 10,000.
              </MenuItem>
              <MenuItem value={3}>
                Users whose last name starts with “M” and has a quote character
                length greater than 15 and email includes his/her last name.
              </MenuItem>
              <MenuItem value={4}>
                Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
                whose email does not include any digit.
              </MenuItem>
              <MenuItem value={5}>
                Show the data of top 10 cities which have the highest number of
                users and their average income.
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Table query={query} />
      </div>
    </>
  );
};

export default HomePage;
