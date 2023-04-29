import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios";
export default function TableComponent({ query }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (query === 1) {
        try {
          const { data } = await axios.get("http://localhost:5000/first");
          console.log(data);
          setRows(data);
          //   dispatch({ type: "addData", data: data });
        } catch (error) {
          console.error(error);
        }
      } else if (query === 2) {
        try {
          const { data } = await axios.get("http://localhost:5000/second");
          console.log(data);
          setRows(data);
          //   dispatch({ type: "addData", data: data });
        } catch (error) {
          console.error(error);
        }
      } else if (query === 3) {
        try {
          const { data } = await axios.get("http://localhost:5000/third");
          console.log(data);
          setRows(data);
          //   dispatch({ type: "addData", data: data });
        } catch (error) {
          console.error(error);
        }
      } else if (query === 4) {
        try {
          const { data } = await axios.get("http://localhost:5000/fourth");
          console.log(data);
          setRows(data);
          //   dispatch({ type: "addData", data: data });
        } catch (error) {
          console.error(error);
        }
      } else if (query === 5) {
        try {
          const { data } = await axios.get("http://localhost:5000/fifth");
          console.log(data);
          setRows(data);
          //   dispatch({ type: "addData", data: data });
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    getData();
  }, [query]);

  return (
    <>
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {query == 5 && (
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  City
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Number of users
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Average Salary
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.avg}</TableCell>
                  <TableCell align="center">{row.numberOfUsers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {query !== 5 && rows.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  First Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Last Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Gender
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Income
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  City
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Car
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Quote
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Phone Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontWeight: "bold" }}>{row.id}</TableCell>
                  <TableCell align="right">{row.first_name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.income}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.car}</TableCell>
                  <TableCell align="right">{row.quote}</TableCell>
                  <TableCell align="right">{row.phone_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        query !== 5 && (
          <h2 style={{ margin: "auto", color: "red" }}>
            Select Query to view Table
          </h2>
        )
      )}
    </>
  );
}
