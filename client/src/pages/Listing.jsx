import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";
const Listing = () => {
  const [person, setPerson] = useState([]);
  const [sortValue, setSortValue] = useState("default");
  const sortOptions = ["default","name", "dob"];

  const handleFileOpen = (file) => {
    window.open(file);
  };
  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`http://localhost:8000/person/${id}`);
      if (data) {
        setPerson(person.filter((p) => p.id !== id));
      }

      toast.success("deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("delete failed");
    }
  };
  useEffect(() => {
    getCountries();
  }, [sortValue]);
  async function getCountries() {
    const { data } = await axios.get(
      `http://localhost:8000/person?sort=${sortValue}`
    );
    setPerson(data);
  }
  const handleChange = (event) => {
    setSortValue(event.target.value);
  };
  return (
    <>
      <Box sx={{ margin: "10px", textAlign: "center" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={sortValue}
          onChange={handleChange}
          helperText="Please select your order"
        >
          {sortOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/* Table Container */}
      <TableContainer sx={{ maxHeight: "300px" }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Country Name</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {person.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{dayjs(row.dob).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleFileOpen(row.resumeUrl)}
                >
                  <PictureAsPdfIcon />
                </TableCell>
                <TableCell
                  sx={{ cursor: "pointer" }}
                  align="center"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Listing;
